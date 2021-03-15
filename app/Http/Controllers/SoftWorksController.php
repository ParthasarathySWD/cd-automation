<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\mAppSettings;
use App\Models\tOrderReprocess;
use App\Models\OrderEntry;
use App\Models\OrderEntryFile;
use App\Models\SoftWorks;

use League\Flysystem\Sftp\SftpAdapter;
use League\Flysystem\Filesystem;

class SoftWorksController extends Controller
{
    public function FTPConfig()
    {
        $FTPConfig = new SftpAdapter([
            'host' => 'example.com',
            'port' => 22,
            'username' => 'username',
            'password' => 'password',
            'privateKey' => 'path/to/or/contents/of/privatekey',
            'passphrase' => 'passphrase-for-privateKey',
            'root' => '/path/to/root',
            'timeout' => 10,
            'directoryPerm' => 0755
        ]);

        return $FTPSystem = new Filesystem($FTPConfig);
    }

    function checkFtpUploadDocument()
	{

		$config['hostname'] =  FTP_HOST;
		$config['username'] =  FTP_USER;
		$config['password'] =  FTP_PWD;
		$config['debug']    = false;
		$config['port']    = FTP_PORT;
		// $uploadedFile =  '/'.$row->OrderNumber.'_'.$doc->DocumentUID.'_'.$file1;

		$this->ftp->connect($config);
		$list = $this->ftp->list_files(FTP_PATH);
		$x = 0;
		foreach ($list as $key => $value) {
			// if($value == $uploadedFile)
			// 	$x=1;
			echo '<pre>';print_r($value);
		}
	}

    public function addNewBatch()
    {
        $process = 0;

        $GetLimitedData = DB::table('mAppSettings')
		    ->select('AppSettingValue')
		    ->where('AppSettingName' ,'=', 'BANDWIDTH')
		    ->get()->toArray();

        $querydoc= DB::table('tOrdersDocuments')
                  ->select('DocumentUID')
                  ->join('tOrders')
                  ->where([
                      ['tOrdersDocuments.OrderUID','=','tOrders.OrderUID'],
                      ['tOrdersDocuments.DocumentTypeUID','=',1]
                  ])
                  ->whereIn('tOrdersDocuments.OcrStatus',array(0,1,2,4))
                  ->limit(1)
                  ->get();
        
        $query = DB::table('tOrders')
				  ->select('tOrders.OrderUID,tOrders.OrderNumber as OrderNumber','tOrdersDocuments.OcrStatus')

				  ->leftJoin('tOrdersDocuments', function($join) {
			            $join->on('tOrdersDocuments.DocumentUID','=',$querydoc);       
			        })
				  ->where('tOrders.IsOCREnabled', '=', 1)
				  ->whereNotNull('tOrdersDocuments.OcrStatus')
				  ->orderByRaw(FIELD('tOrders.PriorityUID', 4,'desc'))
				  ->limit($result)
				  ->get();
        
        if(!$query)
        {
            // $query = $this->softworks_model->getReprocessLoans();
            $result = DB::table('mAppSettings')
                    ->select('AppSettingValue')
                    ->where('AppSettingName' ,'=', 'BANDWIDTH')
                    ->get();
          
            $querydoc= DB::table('tOrdersDocuments')
                    ->select('DocumentUID')
                    ->join('tOrders')
                    ->where([
                        ['tOrdersDocuments.OrderUID','=','tOrders.OrderUID'],
                        ['tOrdersDocuments.DocumentTypeUID','=',1]
                    ])
                    ->whereIn('tOrdersDocuments.OcrStatus',array(0,1,2,4))
                    ->limit(1)
                    ->get();
          
            $query = DB::table('tOrders')
                    ->select('tOrders.OrderUID,tOrders.OrderNumber as OrderNumber','tOrdersDocuments.OcrStatus')
          
                    ->leftJoin('tOrdersDocuments', function($join) {
                            $join->on('tOrdersDocuments.DocumentUID','=',$querydoc);       
                     })
                    ->where('tOrders.IsOCREnabled', '=', 1)
                    ->orWhere('tOrders.ReProcessStatus','=',1)
                    ->whereIn('tOrdersDocuments.OcrStatus',array(0,1,2,4))
                    ->orderByRaw(FIELD('tOrders.PriorityUID', 4,'desc'))
                    ->limit($result)
                    ->get();
          
            $process = 1;
        }

        if($query)
		{
        $returnResponse = [];
          foreach ($query as $row) {
                $TransUID=$row->OrderUID;
                $documentData = DB::table('tOrdersDocuments')
                                ->select('DocumentUID,FilePath as DocumentURL')
                                ->whereIn('OcrStatus',array(0,1,2,4))
                                ->where('OrderUID','=',$TransUID)
                                ->where('OcrHitCount','<=',5)
                                ->get();
		

            if(!empty($documentData)){

                $isAllDocUploaded = false;
				$docUploadErrorTrack = [];
				$count = $row->ReProcessCount;
				$Ordernumber=$row->OrderNumber;

                foreach ($documentData as $doc) {

					$doc_id = $doc->DocumentUID;
					$doc_url = $doc->DocumentURL;

					$batchName = ($process == 1 && isset($count) ? $Ordernumber.'_'.$doc_id.'_'.$count : $Ordernumber.'_'.$doc_id);
					

					$data = array(
							'Name'	=>	$batchName,
							'FileList'	=>	array($doc_url)
						);

					$explode=explode('/',$doc_url);
					$file1 = end($explode);

					// $config['hostname'] =  FTP_HOST;
					// $config['username'] =  FTP_USER;
					// $config['password'] =  FTP_PWD;
					// $config['debug']    = false;
					// $config['port']    = FTP_PORT;

					$uploadedFile =  '/'.$Ordernumber.'_'.$doc_id.'_'.$file1;

					$this->ftp->connect($config);
					$list = $this->ftp->list_files(FTP_PATH);
					$x=0;
					foreach($list as $key=>$value)
					{
						if($value ==  $uploadedFile){
							$x=1;
						}
					}

					if($x == 0)
					{

						$localPath = FCPATH.$doc->DocumentURL;

						// echo "localPath : ".$localPath."<br>";

						if(file_exists($localPath))
						{
							if($this->ftp->upload($localPath, $uploadedFile, 'auto', 0775)){

								// $UpdateDetails = DB::find($id);
								$updateData['OcrStatus'] = 1;
                                $updateResult = $this->updateOrderDocument($doc_id,$updateData);
								$x = 1;
							}else{
								$updateData['OcrStatus'] = 2;
								$updateData['OcrHitCount'] = 'OcrHitCount + 1';
								// $this->softworks_model->updateOrderDocument($doc->DocumentUID,$updateData);
                                $updateResult = $this->updateOrderDocument($doc_id,$updateData);
							}
						}
					}else{
						echo "<b>File : ".$uploadedFile." already uploaded</b> <br>";
					}
					$this->ftp->close();

					$data['FileList'][0] = 'file:///C:/Users/Administrator/Desktop/Test/Input/'.$Ordernumber.'_'.$doc_id.'_'.$file1;

					if($x == 1)
					{
						$swdata = $this->getRequestUrl();
						$url = $swdata['url']."workflow/batches";
						$file = json_encode($data);
						$headers = array(
							    'Content-Type:application/json',
							    'cache-control: no-cache',
							    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
						);

						$curl = curl_init();
						curl_setopt_array($curl, array(
							  CURLOPT_URL => $url,
							  CURLOPT_RETURNTRANSFER => true,
							  CURLOPT_ENCODING => "",
							  CURLOPT_MAXREDIRS => 10,
							  CURLOPT_TIMEOUT => 0,
							  CURLOPT_FOLLOWLOCATION => true,
							  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
							  CURLOPT_CUSTOMREQUEST => "POST",
							  CURLOPT_POSTFIELDS =>$file,
							  CURLOPT_HTTPHEADER => array(
							    "Authorization: Basic ". base64_encode($swdata['username'].":".$swdata['password']), 
							    "Content-Type: application/json"
							  ),
						));

						$response = curl_exec($curl);
						if(curl_errno($curl))
						{
							$updateData['OcrStatus'] = 4;
							$updateData['OcrHitCount'] = 'OcrHitCount+1';

                            $updateResult = $this->updateOrderDocument($doc_id,$updateData);

							return response()->json([
								'name' 		=> $batchName,
								'documentPath'	=> $doc->DocumentURL,
								'status'	=> '404',
								'message'	=>	curl_error($curl)
							]);
						}
						else
						{
							$result = json_decode($response, true);
                            if(!empty($result)){

                                echo "CURL Response: inside !empty...<br>";
                                print_r($result);   

                                if($result['id'] && $result['status'] != "null" && $result['stage'] != "null"){

                                    echo "inside Success...<br>";
                                    print_r($result);

                                    $time = date('Y-m-d h:i:s');
                                   
                                    $updateDocData['OcrStatus'] = 3;
                                    $updateResult = $this->updateOrderDocument($doc_id,$updateData);
                                    // $update = $this->softworks_model->updateOrderDocument($doc->DocumentUID,$updateDocData);
                                    if($updateResult)
                                    {
                                        // $isAllDocUploaded = true;

                                        return response()->json([
                                            'name' 		=> $batchName,
                                            'documentPath'	=> $doc->DocumentURL,
                                            'status'	=> '200',
                                            'message'	=> 'success',
                                            'response'	=> $response,
                                        ]);	
                                    }
                                    else
                                    {
                                        $docUploadErrorTrack[] = "y";

                                        return response()->json([
                                            'name' 		=> $batchName,
                                            'documentPath'	=> $doc->DocumentURL,
                                            'status'	=> '404',
                                            'message'	=> 'Status not updated'
                                        ]);
                                    }
                                }else{ // works only when batch already exists

                                    $updateDocData['OcrStatus'] = 4; 
                                    $updateDocData['OcrHitCount'] = 'OcrHitCount + 1';
                                    $updateResult = $this->updateOrderDocument($doc_id,$updateDocData);

                                    return response()->json([
                                        'name' 		=> $batchName,
                                        'documentPath'	=> $doc->DocumentURL,
                                        'status'	=> '208',
                                        'message'	=> $result['errorMessage']
                                    ]);
                                }

                            }else{

                                echo "Curl Response is Empty...<br>";

                                $updateDocData['OcrStatus'] = 4;
                                $updateDocData['OcrHitCount'] = 'OcrHitCount + 1';
                                $updateResult = $this->updateOrderDocument($doc_id,$updateDocData);

                                return response()->json([
                                    'name' 		=> $batchName,
                                    'documentPath'	=> $doc->DocumentURL,
                                    'status'	=> '500',
                                    'message'	=> 'No Response from Softworks Server.'
                                ]);
                            }
						}
                        curl_close($curl);
					}else{
                        return response()->json([
                            'name' 			=> $batchName,
                            'documentPath'	=> $doc->DocumentURL,
                            'status'		=> '500',
                            'message'		=> 'File upload failed'
                        ]);
                    }

				}// End of Document Loop

                if( in_array("y", $docUploadErrorTrack) === FALSE ){
                    $reprocess = '';
                    if($process == '1')
                    {
                        $reprocess = '3';
                    }
                    $updateData['ReProcessStatus'] = $reprocess;
                    $this->updateOrderStatus($row->OrderNumber,$updateData);

                    $TransactionStatus['CurrentStatus'] = 'OCR inprogress';
                    // $TransactionStatus['ColorCodeClass'] = 'inprogress';
                    $OrderUID = DB::table('tOrders')
                                    ->select('OrderUID')
                                    ->where('OrderNumber',$row->OrderNumber)
                                    ->where('StatusName','OCR')
                                    ->where('OrderUID',$OrderUID)
                                    ->get()
                                    ->row()
                                    ->update('tOrderstatus',$TransactionStatus)
                                    ->OrderUID;
                                   
                   
                }

            }else{

                $reprocess = '';
                if($process == '1')
                {
                    $reprocess = '3';
                }
                $updateData['ReProcessStatus'] = $reprocess;
                $this->updateOrderStatus($row->OrderNumber,$updateData);

                return response()->json([
                    'name' 			=> $row->OrderNumber,
                    'status'		=> '404',
                    'message'		=> 'No Loan documents available for this order.'
                ]);
            }
         }

        }else
		{
            return response()->json([
                'status'	=>	'204', 
                'message'	=>	'No Content Found'
            ]);
		
		}
		exit;
       
        
    }
    /* addNewBatch Function ends */

    public function updateOrderDocument($doc_id,$updateData)
    {
        $updateQuery = DB::table('tOrdersDocuments')
                    ->where('DocumentUID',$doc_id)
                    ->update($updateData);
        return $updateQuery;
    }

    public function updateOrderStatus($OrderNumber,$data)
	{
        $updateQuery = DB::table('tOrders')
		        ->where('OrderNumber',$OrderNumber)
				  ->update($data);
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

    public function getRequestUrl()
	{
		// $api_url = $this->config->config['api_server'];
        $api_url = env("APIURL");
		$data = array();
		$data['url'] = $api_url['server1']['url'];
		$data['username'] = $api_url['server1']['username'];
		$data['password'] = $api_url['server1']['password'];
		return $data;

	}

    public function updateBatchStatus()
	{
		$swdata = $this->getRequestUrl();
		$url = $swdata['url']."workflow/batches";
		$headers = array(
		    'Content-Type:application/json',
		    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
		);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_TIMEOUT, 60);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		$data = curl_exec($ch);
		if (curl_errno($ch))
		{
            return response()->json([
                'status'	=>	'404', 
                'message'	=>	curl_error($ch)
            ]);
		}
		else
		{
			$data = json_decode($data);
			foreach ($data as $key => $value) {
				if($value->status == 'failed')
				{	$pickedTime = date('Y-m-d h:i:s',strtotime($value->scannedDate));	
					$modifyTime = date('Y-m-d h:i:s',strtotime($value->modifiedDate));
					$data = array(
						'IsOCREnabled'	=>	'4',
						'OCRPickedDateTime'	=>	$pickedTime,
						'OCREndDateTime'	=>	$modifyTime
					);
					$this->updateOrderStatus($value->name,$data);
				}
			}
			curl_close($ch);
		}
	}

    public function getAllClasificationBatches()
	{
        $swdata = $this->getRequestUrl();
		$url = $swdata['url']."classification/batches";
		$headers = array(
		    'Content-Type:application/json',
		    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
		);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_TIMEOUT, 60);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		$data = curl_exec($ch);

		// echo "<pre>";
		// print_r($data);exit;

		if (curl_errno($ch))
		{

            return response()->json([
                'status'	=>	'204', 
                'message'	=>	curl_error($ch)
            ]);
		}

        else
		{
			$data = json_decode($data);
			$ocrStatus = '3';
			// $waitingBatch = $this->softworks_model->checkProcessBatch($ocrStatus);

            $waitingBatch = DB::table('tOrders')
                    ->select('tOrders.OrderNumber as OrderNumber','tOrders.ReProcessStatus','tOrderReprocess.ReProcessCount','tOrdersDocuments.OcrStatus','tOrdersDocuments.DocumentUID')          
                    ->leftJoin('tOrdersDocuments',function($join){
                        $join->on('tOrdersDocuments.OrderUID','=','tOrders.OrderUID');
                    })
                    ->leftJoin('tOrderReprocess',function($join){
                        $join->on('tOrderReprocess.OrderUID','=','tOrders.OrderUID');
                    })
                    ->where('tOrdersDocuments.OcrStatus','=',$ocrStatus);

			echo "<pre>";
			echo "waitingBatch<br>";
			print_r($waitingBatch);
			// exit;
			if($waitingBatch):
			foreach ($waitingBatch as $waitkey => $waitvalue) {
				foreach ($data as $key => $value) {
					$bName = $waitvalue->OrderNumber.'_'.$waitvalue->DocumentUID;
					if($waitvalue->ReProcessStatus == '3' && isset($waitvalue->ReProcessCount))
					{
						$bName = $waitvalue->OrderNumber.'_'.$waitvalue->DocumentUID.'_'.$waitvalue->ReProcessCount;
					}
					if($value->status == 'updated' && $value->name == $bName)
					{				
						$pickedTime = strtotime($value->scannedDate);
						$modifyDate = strtotime($value->modifiedDate);

						echo "<pre>";
						print_r($value);
						// exit;
						$this->getClassificationByBatch($value->name,$pickedTime,$modifyDate);
					}
				}
			}
			endif;
			$this->getExtractionResult();
			// $this->getAllBatchesErrors();

            return response()->json([
                'status'	=>	'200', 
                'message'	=>	'success',
                'response'	=>	$data
            ]);

		}


    }

    public function getClassificationByBatch($batchName,$pickedTime,$modifyDate)
	{
		echo "getClassificationByBatch hitted... <br>";
		echo "BatchName : ".$batchName."<br>";
		$swdata = $this->getRequestUrl();
		if(!empty($batchName))
		{
			$url = $swdata['url']."classification/batches/".$batchName."/pages";
			$headers = array(
			    'Content-Type:application/json',
			    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
			);
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_TIMEOUT, 60);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

			$pagesData = curl_exec($ch);
			$extractData = $pagesData;

            curl_close($ch);
            $bName = explode('_', $batchName);
            print_r("bName<br>");
            print_r($bName);
            // $orderData = $this->softworks_model->getOrderDetail($bName[0]);
            $orderData = DB::table('tOrders')
                        ->select('OrderUID as OrderUID','ProjectUID','DataExtractionEnable','ReProcessStatus')
                        ->where(array('TransactionNumber'	=>	$bName))
                        ->get();
            
            $orderId = $orderData->OrderUID;
            $projectId = $orderData->ProjectUID;
            $DocumentUID = $bName[1];

            $data = ['OcrStatus' => 5];
            $update = DB::table('tOrdersDocuments')
                        ->where('DocumentUID',$DocumentUID)
                        ->update($data);


            $swdata = $this->getRequestUrl();
            $url = $swdata['url']."classification/batches/".$batchName."/pages";
            $headers = array(
                        'Content-Type:application/json',
                        'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
            );
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "PUT",
                CURLOPT_POSTFIELDS => $extractData,
                CURLOPT_HTTPHEADER => $headers
            ));
            if (curl_errno($curl))
            {
                $data = ['OcrStatus' => 8];
                $this->updateOrderDocument($DocumentUID,$data);
            }else{
                $data = ['OcrStatus' => 7];
                $this->updateOrderDocument($DocumentUID,$data);
            }
            $response = curl_exec($curl);
            print_r("PUT response <br>");
            print_r($response);
            curl_close($curl);
    
            echo "Order moved to next for Batch: ".$batchName." hitted...<br>";        

            return response()->json([
                'status'	=>	'200', 
                'message'	=>	'success'
            ]);       

        }
        else
		{
            return response()->json([
                'status'	=>	'204', 
                'message'	=>	'No Content Found'
            ]); 
		}
    }

    public function getExtractionResult()
    {
    	echo "getExtractionResult hitted...<br>";
    	$batches = DB::table('tOrders')
                   ->select('tOrders.OrderNumber as OrderNumber','tOrderReprocess.ReProcessCount','tOrdersDocuments.DocumentUID','tOrdersDocuments.OcrStatus')
                   ->leftJoin('tOrderReprocess',function($join){
                        $join->on('tOrderReprocess.OrderUID','=','tOrders.OrderUID');
                   })
                   ->leftJoin('tOrdersDocuments',function($join){
                        $join->on('tOrdersDocuments.OrderUID','=','tOrders.OrderUID');
                   })
                   ->whereIn('tOrdersDocuments.OcrStatus',array(7,10))
                   ->where('DataExtractionEnable','=','1');
        
        $extraction = $this->getAllExtractionBatches();
        $extraction = json_decode($extraction);

        foreach ($batches as $key => $value) {
    		foreach ($extraction as $k => $val) 
    		{
    			$bName = $value->OrderNumber.'_'.$value->DocumentUID;
    			if($value->ReProcessCount > 0)
    			{
    				$bName = $value->OrderNumber.'_'.$value->DocumentUID.'_'.$value->ReProcessCount;
    			}
    			if($bName == $val->name && $val->stage == 'Final' && $val->status == 'updated')
    			{
    				// echo "bName : ".$bName."<br>";
    				$result = $this->getExtractionBatchesData($bName);
       				if($result)
    				{
    					echo "Inside Json saved successful...<br>";

	
						$extractionStatus = ['OcrStatus' => 9, 'OcrExtractedPath' => $result];
						// $this->Common_model->updateOrderDocData($extractionStatus,$value->DocumentUID);
                        $query = DB::table('tOrdersDocuments')
                                ->where('DocumentUID',$value->DocumentUID)
                                ->update($extractionStatus);
                        
						$swdata = $this->getRequestUrl();
						$url = $swdata['url']."workflow/batches/".$val->name."/cleanup/Final";
						$headers = array(
						    'Content-Type:application/json',
						    'Content-Length:0',
						    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
						);
						$curl = curl_init();
						curl_setopt_array($curl, array(
						  CURLOPT_URL => $url,
						  CURLOPT_RETURNTRANSFER => true,
						  CURLOPT_ENCODING => "",
						  CURLOPT_MAXREDIRS => 10,
						  CURLOPT_TIMEOUT => 0,
						  CURLOPT_FOLLOWLOCATION => true,
						  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
						  CURLOPT_CUSTOMREQUEST => "PUT",
						  CURLOPT_HTTPHEADER => $headers
						));
						$response = curl_exec($curl);
						echo json_encode($response);
    				}

    			}
    		}
    	}

    }

    public function getAllExtractionBatches()
	{
		$swdata = $this->getRequestUrl();
		$url = $swdata['url']."extraction/batches";
		$headers = array(
		    'Content-Type:application/json',
		    'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
		);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_TIMEOUT, 60);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		$data = curl_exec($ch);
		if (curl_errno($ch))
		{
			$res = array('status'	=>	'404', 'message'	=>	curl_error($ch));
			echo json_encode($res);
			exit();
		}
		else
		{

			curl_close($ch);
			return $data;
		}
	}
    public function getExtractionBatchesData($batchName)
	{
		echo "getExtractionBatchesData hitted...<br>";
		$bName = explode('_', $batchName);
		print_r("bName<br>");
		print_r($bName);
		$OrderNumber = $bName[0];
		$DocumentUID = $bName[1];

        $swdata = $this->getRequestUrl();
        $url = $swdata['url']."extraction/batches/".$batchName."/fields";
        $headers = array(
            'Content-Type:application/json',
            'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $data = curl_exec($ch);
        if (curl_errno($ch))
        {

            $query = DB::table('tOrdersDocuments')
                    ->where('DocumentUID',$DocumentUID)
                    ->update('OcrStatus','=','10');

            return response()->json([
                'status'	=>	'404', 
                'message'	=>	curl_error($ch)
            ]); 
        
            curl_close($ch);
            return false;
            exit();
        }
        else
        {
            $batchResult = json_decode($data,true);
			$output = json_encode($batchResult,JSON_PRETTY_PRINT);
			$OrderDocs_Path = FCPATH.'uploads/OrderDocumentPath/'.$OrderNumber.'/';
			if (!is_dir($OrderDocs_Path)) {
				mkdir($OrderDocs_Path, 0777, true);
			}
			$name = FCPATH.'uploads/OrderDocumentPath/'.$OrderNumber.'/'.$batchName.'.json';
			$Filename = 'uploads/OrderDocumentPath/'.$OrderNumber.'/'.$batchName.'.json';
            $myfile = fopen($name, "w") or print_r($name." Unable to open file!");
            fwrite($myfile, $output);
			fclose($myfile);
			$TransactionDetails = DB::table('tOrders')
                                ->select('*')
                                ->where('OrderNumber','=','$OrderNumber')
                                ->get()
                                ->row();
			
			$this->Insert_json_document($TransactionDetails->OrderUID,$batchName,$Filename);
            $this->Read_ocr_jsonValues($TransactionDetails,$name);
            return $name;
        }

    }

    // insert json document 
	  function Insert_json_document($TransactionUID,$batchName,$DocumentFilePath)
	  {
		  $DocumentData->TransactionUID = $TransactionUID;
		  $DocumentData->DocumentName = $batchName;
		  $DocumentData->DocumentFilePath = $DocumentFilePath;
		  $DocumentData->DocumentType = 'json';
		  $DocumentData->CreatedUserUID = 0;
		  $DocumentData->Active = 1;
		  $query = DB::table('tOrdersDocuments')
                    ->insert($DocumentData);
        
	  }

       // Read ocr Values
	  function Read_ocr_jsonValues($TransactionDetails,$name)
	  {
		  $TransactionUID = $TransactionDetails->OrderUID;
		  $ClientTemplateUID = $TransactionDetails->ClientTemplateUID;
		  $filelink = $name;
		  if (file_exists($filelink)) {
			  $filecontents = file_get_contents($filelink);
			  $data = json_decode($filecontents, true);
  
			  $Values = [];
			  
			  foreach ($data as $key => $datavalue) 
			  {
				  foreach ($datavalue as $key => $fieldList) 
				  {
					  foreach ($fieldList  as $key => $value) 
					  {
						  $MasterFormFieldUID = DB::table('mFormFields')
                                                ->select('FormFieldUID')
                                                ->where('FormFieldName','=',$value['name'])
                                                ->get()
                                                ->row()->FormFieldUID;
                        //   $this->db->select('FormFieldUID')->from('mOCRfieldMapping')->where('FormFieldName',$value['name'])->get()->row()->FormFieldUID;

						  if($value['name'] == 'Property_Address_Line1')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{	
						  		$PropertyAddress1['PropertyAddress1'] = $value['dataOriginal'];
                                $update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyAddress1);
						  	}
						  }

						  if($value['name'] == 'Property_Address_Line2')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{
						  		$PropertyAddress2['PropertyAddress2'] = $value['dataOriginal'];
                                $update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyAddress2);
						  	}
						  }

						  if($value['name'] == 'Property_Address_City')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{
						  		$PropertyCityName['PropertyCityName'] = $value['dataOriginal'];
                                $update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyCityName);
						  	}
						  }

						  if($value['name'] == 'Property_Address_State')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{
						  		$PropertyStateCode['PropertyStateCode'] = $value['dataOriginal'];
						  		$update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyStateCode);
						  	}
						  }

						  if($value['name'] == 'County')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{
						  		$PropertyCountyName['PropertyCountyName'] = $value['dataOriginal'];
						  		$update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyCountyName);
						  	}
						  }

						  if($value['name'] == 'Property_Address_Zip')
						  {
						  	if(!empty($value['dataOriginal']))
						  	{
						  		$PropertyZipcode['PropertyZipcode'] = $value['dataOriginal'];
						  		$update = DB::table('tOrders')
                                        ->where('OrderUID',$TransactionUID)
                                        ->update($PropertyZipcode);
						  	}
						  }

						  if(!empty($MasterFormFieldUID))
						  {
							  if(!empty($ClientTemplateUID))
							  {
								  $FormFieldUID = DB::table('mClientTemplateFields')
                                                ->select('FormFieldUID')
                                                ->where('FormFieldUID',$MasterFormFieldUID)
                                                ->get()->row()->FormFieldUID;
                                //   $this->db->select('FormFieldUID')->from('mTemplateFields')->where('FormFieldUID',$MasterFormFieldUID)->get()->row()->FormFieldUID;
							  }
							  else
							  {
                                    $FormFieldUID = DB::table('mClientTemplateFields')
                                                    ->select('FormFieldUID')
                                                    ->where('FormFieldUID',$MasterFormFieldUID)
                                                    ->get()->row()->FormFieldUID;
								//   $FormFieldUID = $this->db->select('FormFieldUID')->from('mTemplateFields')->where('FormFieldUID',$MasterFormFieldUID)->get()->row()->FormFieldUID;
							  }
  
							  if(!empty($FormFieldUID))
							  {
								  $tFormValues = [];
								  $tFormValues['TransactionUID'] = $TransactionUID;
								  $tFormValues['FormFieldUID'] = $FormFieldUID;
								  $tFormValues['FormValue'] = $value['dataOriginal'];  
								  $tFormValues['Confidence'] = $value['conf'];
  
								  $isFormValueAvailable = DB::table('tFormValues')
                                                        ->select('FormFieldUID')
                                                        ->where(array('FormFieldUID'=>$FormFieldUID,'TransactionUID'=>$TransactionUID))
                                                        ->get()->row();
                                //   $this->db->select('FormFieldUID')->from('tFormValues')->where(array('FormFieldUID'=>$FormFieldUID,'TransactionUID'=>$TransactionUID))->get()->row();

								  if (!empty($isFormValueAvailable)) 
								  {
									//   $this->db->where('FormFieldUID',$FormFieldUID);
									//   $this->db->update('tFormValues', $tFormValues);
                                    $update_query = DB::table('tFormValues')
                                                    ->where('FormFieldUID',$FormFieldUID)
                                                    ->update($tFormValues);
								  }
								  else
								  {
									//   $this->db->insert('tFormValues', $tFormValues);
                                    DB::table('tFormValues')
                                        ->insert($tFormValues);
								  }
								  $Values[] = $tFormValues;
  
							  }
						  }
					  }
				  }
			  }
			  if(!empty($Values)){

                $query = DB::table('tOrders')
                        ->where('OrderUID',$TransactionUID)
                        ->update(array('OcrStatusReceived'=>date('Y-m-d h:i:s'),'StatusUID'=>4));
				//   $this->db->where('TransactionUID',$TransactionUID)->update('tTransactions',array('OcrStatusReceived'=>date('Y-m-d h:i:s'),'StatusUID'=>4));
			  }
  
		  }
		 $this->BulkGenerateFinalDocument($TransactionUID);
	  }

      function BulkGenerateFinalDocument($TransactionUID)
	  {
	  	// $this->db->select('*')->from('tFormValues');
	  	// $this->db->where('TransactionUID',$TransactionUID);
	  	// $this->db->get()->row();

        $result = DB::table('tFormValues')
                ->select('*')
                ->where('OrderUID',$TransactionUID)
                ->get()->row();
	  	if(!empty($result))
	  	{
	  		$this->generateFinalDoc($TransactionUID);
	  	}
	  	$TransactionStatus['CurrentStatus'] = 'OCR completed';
	  	$TransactionStatus['ColorCodeClass'] = 'Completed';
        $select_query = DB::table('mOrderStatus')
                        ->where('StatusName','=','OCR')
                        ->where('OrderUID',$TransactionUID)
                        ->update($TransactionStatus);
	  	// $this->db->where('StatusName','OCR');
	  	// $this->db->where('TransactionUID',$TransactionUID);
	  	// $this->db->update('tTransactionStatus',$TransactionStatus);
	  }

      function generateFinalDoc($TransactionUID)
      {
            $date = date('Ymd');
            $amNY = new DateTime('America/New_York');
            $estTime = $amNY->format('Y/m/d H:i:s');
        if(!empty($TransactionUID)){

            $Transaction = DB::table('tOrders')
                        ->select('OrderNumber,TemplateUID,ClientTemplateUID,PropertyStateCode,PropertyCountyName,PropertyCityName,PropertyZipCode,PropertyAddress1,PropertyAddress2')
                        ->where('OrderUID',$TransactionUID)
                        ->get()->row();
            
            // $this->db->select('TransactionNumber,TemplateUID,ClientTemplateUID,PropertyStateCode,PropertyCountyName,PropertyCityName,PropertyZipCode,PropertyAddress1,PropertyAddress2')->where('TransactionUID',$TransactionUID)->get('tTransactions')->row();

            if(empty($Transaction->ClientTemplateUID) && empty($Transaction->TemplateUID)){
                //Do nothing
                return json_encode(array('status'=>0,'message'=>'No Templates Found!'));
            }else{

                /* ----------------------------- ORDER DOC PATH ----------------------------- */
                $OrderDocs_Path = 'uploads/OrderDocumentPath/'.$Transaction->TransactionNumber.'/';
                if (!is_dir($OrderDocs_Path)) {
                    mkdir($OrderDocs_Path, 0777, true);
                }

                if(!empty($Transaction->ClientTemplateUID)){
                    $Template = DB::table('mClientTemplates')
                                ->where('ClientTemplateUID',$Transaction->ClientTemplateUID)
                                ->get()->row();
                    // $this->db->where('ClientTemplateUID',$Transaction->ClientTemplateUID)
                    // ->get('mClientTemplates')->row();
                    $ResultData = $Template->TemplateContent;
                    if(!empty($Template) && !empty($Template->TemplateContent)){
                        $TemplateFields = $this->getDefaultTemplateFields('Client',$Transaction->ClientTemplateUID,$TransactionUID);
                    }
                }else if(!empty($Transaction->TemplateUID)){
                    $Template = DB::table('mTemplates')
                            ->where('TemplateUID',$Transaction->TemplateUID)
                            ->get()->row();
                   
                    $ResultData = $Template->TemplateContent;
                    if(!empty($Template) && !empty($Template->TemplateContent)){
                        $TemplateFields = $this->getDefaultTemplateFields('Gio',$Transaction->TemplateUID,$TransactionUID);
                    }
                }

                if(!empty($Transaction->ClientTemplateUID) || !empty($Transaction->TemplateUID)){

                    // echo '<pre>';print_r($Transaction);exit;
                    // PropertyStateName
                    $hashStr = trim('%%PropertyStateCode%%');
                    $ReaVal = trim($Transaction->PropertyStateCode);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PropertyCountyName
                    $hashStr = trim('%%PropertyCountyName%%');
                    $ReaVal = trim($Transaction->PropertyCountyName);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PropertyCityName
                    $hashStr = trim('%%PropertyCityName%%');
                    $ReaVal = trim($Transaction->PropertyCityName);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PropertyAddress1
                    $hashStr = trim('%%PropertyAddress1%%');
                    $ReaVal = trim($Transaction->PropertyAddress1);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PropertyAddress2
                    $hashStr = trim('%%PropertyAddress2%%');
                    $ReaVal = trim($Transaction->PropertyAddress2);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PropertyZipCode
                    $hashStr = trim('%%PropertyZipCode%%');
                    $ReaVal = trim($Transaction->PropertyZipCode);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    $OrganizationDetails = DB::table('mOrganization')
                                        ->select('*')
                                        ->where('OrganizationUID',$this->session->userdata('OrganizationUID'))  /* $ */
                                        ->get()->row();
                    
                    // $this->db->select('*')->from('mOrganization')->where('OrganizationUID',$this->session->userdata('OrganizationUID'))->get()->row();
                    $User = $this->GetUserAllDetails($this->session->userdata('UserUID')); /* $ */

                    // PreparedBy
                    $hashStr = trim('%%PreparedBy%%');
                    $ReaVal = trim($User->FirstName);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedByOrg
                    $hashStr = trim('%%PreparedByOrg%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationName);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedByAddress1
                    $hashStr = trim('%%PreparedByAddress1%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationAddress1);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedByAddress2
                    $hashStr = trim('%%PreparedByAddress2%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationAddress2);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedByCityName
                    $hashStr = trim('%%PreparedByCityName%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationCity);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedByStateCode
                    $hashStr = trim('%%PreparedByStateCode%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationState);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // PreparedZipCode
                    $hashStr = trim('%%PreparedZipCode%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationZipcode);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnToOrg
                    $hashStr = trim('%%ReturnToOrg%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationName);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnAddress1
                    $hashStr = trim('%%ReturnAddress1%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationAddress1);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnAddress2
                    $hashStr = trim('%%ReturnAddress2%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationAddress2);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnCityName
                    $hashStr = trim('%%ReturnCityName%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationCity);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnStateCode
                    $hashStr = trim('%%ReturnStateCode%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationState);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // ReturnZipCode
                    $hashStr = trim('%%ReturnZipCode%%');
                    $ReaVal = trim($OrganizationDetails->OrganizationZipcode);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);

                    // OrderNumber
                    $hashStr = trim('%%OrderNumber%%');
                    $ReaVal = trim($Transaction->TransactionNumber);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);


                    
                    foreach ($TemplateFields as $key => $value) {
                    $hashStr = trim('%%'.$value->FormFieldHash.'%%');
                    $ReaVal = trim($value->FormValue);
                    $ResultData = str_replace($hashStr,$ReaVal,$ResultData);
                    }

                    $PageSize = $Template->PageSize;
                    $MarginLeft = $Template->MarginLeft;
                    $MarginRight = $Template->MarginRight;
                    $MarginTop = $Template->MarginTop;
                    $MarginBottom = $Template->MarginBottom;

                    $FirstMarginTop = $Template->FirstMarginTop;
                    $FirstMarginBottom = $Template->FirstMarginBottom;
                    $FirstMarginRight = $Template->FirstMarginRight;
                    $FirstMarginLeft = $Template->FirstMarginLeft;

                    if($FirstMarginTop){
                        $FirstTop = $FirstMarginTop;
                    } else {
                        $FirstTop = $MarginTop;
                    }

                    if($FirstMarginBottom){
                        $FirstBottom = $FirstMarginBottom;
                    } else {
                        $FirstBottom = $MarginBottom;
                    }

                    if($FirstMarginRight){
                        $FirstRight = $FirstMarginRight;
                    } else {
                        $FirstRight = $MarginRight;
                    }

                    if($FirstMarginLeft){
                        $FirstLeft = $FirstMarginLeft;
                    } else {
                        $FirstLeft = $MarginLeft;
                    }

                    $ResultData.= "  <style> @page :first {margin-top:".$FirstTop."mm;margin-bottom:".$FirstBottom."mm;margin-left:".$FirstLeft."mm;margin-right:".$FirstRight."mm; }  @page {sheet-size:".$PageSize.";header: html_MyCustomHeader;footer: html_MyCustomFooter;margin-top:".$MarginTop."mm;margin-bottom:".$MarginBottom."mm;margin-left:".$MarginLeft."mm;margin-right:".$MarginRight."mm; }</style> ";
                    // echo '<pre>';print_r($ResultData);exit;
                                
                    $this->load->library('pdf');
                    $param = '"en-GB-x","'.$PageSize.'","","","'.$MarginLeft.'","'.$MarginRight.'","'.$MarginTop.'","'.$MarginBottom.'",6,3';
                    unset($pdf);
                    $pdf = $this->pdf->load($param);
                    $pdf->SetProtection(array('copy','print','modify','annot-forms','fill-forms','extract','assemble','print-highres'));
                                
                    $L_name = md5(Date('Y-m-d H:i:s'));
                    $pdf->packTableData = true;
                    $pdf->shrink_tables_to_fit = 1;
                                
                    $html = mb_convert_encoding($ResultData, 'UTF-8', 'UTF-8');
                    $pdfFilePath = $OrderDocs_Path . $L_name.'.pdf';
                    $pdf->WriteHTML($html);
                    $pdf->Output($pdfFilePath, "F");
                    $FinalDocs = DB::table('tOrdersDocuments')
                                ->where(array('OrderUID'=>$TransactionUID,'DocumentTypeUID'=>3))
                                ->get();
                    if(count($FinalDocs) == 0)
                    {
                        $FinalDocs = 1; 
                    }
                    else
                    {
                        $FinalDocs = count($FinalDocs);
                    }
                    $DocName = 'Finaldocument'.$FinalDocs.'.pdf';
                    $tDocumentArray=array('OrderUID'=>$TransactionUID,'DocumentName'=>$DocName,'DocumentFilePath'=>$pdfFilePath,'DocumentExtension'=>'pdf','DocumentTypeUID'=>3,'CreatedUserUID'=>0,'CreatedDateTime'=>$estTime,'Active'=>1);
                    $res = DB::table('tOrdersDocuments')->insert($tDocumentArray)
                    // $this->db->insert('tDocuments',$tDocumentArray);
                    $InsertID = $data->id;
                    // $this->db->insert_id();
                    $update=DB::table('tORders')
                            ->where('OrderUID',$TransactionUID)
                            ->update(array('StatusUID'=>5,'FinalDocumentUID'=>$InsertID));
                    // $this->db->where('TransactionUID',$TransactionUID)
                    // ->update('tTransactions',array('StatusUID'=>5,'FinalDocumentUID'=>$InsertID));

                    $TransactionStatus['CurrentStatus'] = 'Document ready for e-signing/printing';
                    $TransactionStatus['ColorCodeClass'] = 'Ready';

                    $update = DB::table('mOrderStatus')
                            ->where('StatusName','Signing/Printing')
                            ->whereIn('TransactionUID', $ProcessedOrders)
                            ->update($TransactionStatus);
                    // $this->db->where('StatusName','Signing/Printing');
                    // $this->db->where_in('TransactionUID', $ProcessedOrders);
                    // $this->db->update('tTransactionStatus',$TransactionStatus);
                    // $this->InserttPrintingSignDetails($TransactionUID,$InsertID,$Transaction->ClientTemplateUID);
                    }
                    if($res){
                        return response()->json([
                            'status'	=>	'1', 
                            'message'	=>	'Document Generated successfully!',
                            'FinalDocumentUID'=>$InsertID,
                            'Path'=>$pdfFilePath,
                            'DocName'=>$DocName,
                            'estTime'=>date('m/d/Y H:i:s',
                            strtotime($estTime)
                        
                        ]); 
                        //  return json_encode(array('status'=>1,'message'=>'Document Generated successfully!','FinalDocumentUID'=>$InsertID,'Path'=>$pdfFilePath,'DocName'=>$DocName,'estTime'=>date('m/d/Y H:i:s',strtotime($estTime))));
                    }else{
                        return response()->json([
                            'status'	=>	'0', 
                            'message'	=>	'Failed!'
                        ]);  
                        // return json_encode(array('status'=>0,'message'=>'Failed!'));
                    }

                }
            }
        }

        function getDefaultTemplateFields($Type,$TemplateUID,$TransactionUID){  
            if($Type == 'Client'){

                $query = DB::table('mClientTemplateFields')
                        ->select('mFormFields.*,tFormValues.FormValue,tFormValues.Confidence')
                        ->leftJoin('mFormFields','mFormFields.FormFieldUID', '=' , 'mClientTemplateFields.FormFieldUID');
                        ->leftJoin('tFormValues','tFormValues.FormFieldUID = mClientTemplateFields.FormFieldUID AND tFormValues.TransactionUID = '.$TransactionUID.'');
                        ->where('mClientTemplateFields.ClientTemplateUID',$TemplateUID);
                        ->where('FormFieldRequire',1);
                        ->group_by('mFormFields.FormFieldUID');
                        ->get();
                return $query;
            }else{

                $query = DB::table('mTemplateFields')
                        ->select('mFormFields.*,tFormValues.FormValue,tFormValues.Confidence');
                        ->leftjoin('mFormFields','mFormFields.FormFieldUID = mTemplateFields.FormFieldUID');
                        ->leftJoin('tFormValues','tFormValues.FormFieldUID = mTemplateFields.FormFieldUID AND tFormValues.TransactionUID = '.$TransactionUID.'','left');
                        ->where('mTemplateFields.TemplateUID',$TemplateUID);
                        ->where('FormFieldRequire',1);
                        ->group_by('mFormFields.FormFieldUID');
                        ->get();
                return $query;
            } 
        }
        function GetUserAllDetails($UserUID)
        {
            $query = DB::table('mUsers')
                    ->select("*");
                    ->where(array("mUsers.UserUID"=>$UserUID));
                    ->get();

            return $query->row();
        }

        public function getAllBatchesErrors()
	    {
            $swdata = $this->getRequestUrl();
            $url = $swdata['url']."workflow/batches";
            $headers = array(
                'Content-Type:application/json',
                'Authorization: Basic '. base64_encode($swdata['username'].":".$swdata['password']) 
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 60);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            $data = curl_exec($ch);
            if (curl_errno($ch))
            {
                return response()->json([
                    'status'	=>	'404', 
                    'message'	=>	curl_error($ch)
                ]);  
            }
            else
            {
                $response = json_decode($data);
                $ocrStatus = '2';
                $waitingBatch = $this->checkProcessBatch($ocrStatus);
                if(!empty($waitingBatch)):
                foreach ($waitingBatch as $key => $value) {
                    foreach ($response as $dkey => $dvalue) {	
                        if($value->OrderNumber == $dvalue->name && $dvalue->status == 'failed')
                        {
                            $data = array(
                                'IsOCREnabled'	=> 10,
                                'OcrStatus'		=> 6
                            );
                            $this->updateOrderStatus($value->OrderNumber,$data);
                            print_r($value);

                        }
                    }
                }
                endif;
                curl_close($ch);
                return true;		
            }
	    }

        public function checkProcessBatch($ocrStatus)
	    {
		
            $query = DB::table('tOrders')
                    ->select(' tOrders.OrderNumber AS OrderNumber','tOrders.ReProcessStatus', 'tOrderReprocess.ReProcessCount', 'tOrdersDocuments.OcrStatus', 'tOrdersDocuments.DocumentUID')
                    ->leftJoin('tOrdersDocuments',function($join){
                        $join->on('tDocuments.OrderUID = tOrders.OrderUID');
                    })
                    ->leftJoin('tOrderReprocess',function($join){
                        $join->on('tDocuments.OrderUID = tOrders.OrderUID');
                    })
                    ->where('tOrderDocuments.OcrStatus','=',$ocrStatus);
				  
            if($query->num_rows()  > 0)
            {
                return $query->result();
            }
            else
            {
                return false;
            }
        }


}
