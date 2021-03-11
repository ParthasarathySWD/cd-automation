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

    public function addNewBatch()
    {
        $process = 0;

        $GetLimitedData = DB::table('mAppSettings')
		    ->select('AppSettingValue')
		    ->where('AppSettingName' ,'=', 'BANDWIDTH')
		    ->get()->toArray();

        $querydoc= DB::table('tordersdocuments')
                  ->select('DocumentUID')
                  ->join('tOrders')
                  ->where([
                      ['tordersdocuments.OrderUID','=','tOrders.OrderUID'],
                      ['tordersdocuments.DocumentTypeUID','=',1]
                  ])
                  ->whereIn('tordersdocuments.OcrStatus',array(0,1,2,4))
                  ->limit(1)
                  ->get();
        
        $query = DB::table('tOrders')
				  ->select('tOrders.OrderUID,tOrders.TransactionNumber as OrderNumber','tordersdocuments.OcrStatus')

				  ->leftJoin('tordersdocuments', function($join) {
			            $join->on('tordersdocuments.DocumentUID','=',$querydoc);       
			        })
				  ->where('tOrders.IsOCREnabled', '=', 1)
				  ->whereNotNull('tDocuments.OcrStatus')
				  ->orderByRaw(FIELD('tOrders.PriorityUID', 4,'desc'))
				  ->limit($result)
				  ->get();
        
        if(!$query)
        {
            // $query = $this->softworks_model->getReprocessLoans();
            $result = DB::table('mAppSettings')
                    ->select('OrderSettingValue')
                    ->where('OrderSettingName' ,'=', 'BANDWIDTH')
                    ->get();
          
            $querydoc= DB::table('tordersdocuments')
                    ->select('DocumentUID')
                    ->join('tOrders')
                    ->where([
                        ['tordersdocuments.OrderUID','=','tOrders.OrderUID'],
                        ['tordersdocuments.DocumentTypeUID','=',1]
                    ])
                    ->whereIn('tordersdocuments.OcrStatus',array(0,1,2,4))
                    ->limit(1)
                    ->get();
          
            $query = DB::table('tOrders')
                    ->select('tOrders.OrderUID,tOrders.TransactionNumber as OrderNumber','tordersdocuments.OcrStatus')
          
                    ->leftJoin('tordersdocuments', function($join) {
                            $join->on('tordersdocuments.DocumentUID','=',$querydoc);       
                     })
                    ->where('tOrders.IsOCREnabled', '=', 1)
                    ->orWhere('tOrders.ReProcessStatus','=',1)
                    ->whereIn('tordersdocuments.OcrStatus',array(0,1,2,4))
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
                $documentData = DB::table('tordersdocuments')
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
                    $TransactionStatus['ColorCodeClass'] = 'inprogress';
                    $OrderUID = DB::table('tOrders')
                                    ->select('OrderUID')
                                    ->where('TransactionNumber',$row->OrderNumber)
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
         echo json_encode(response);exit;

        }else
		{
			$res = array('status'	=>	'204', 'message'	=>	'No Content Found');
			echo json_encode($res);
		}
		exit;
       
        
    }
}
