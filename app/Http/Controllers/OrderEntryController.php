<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderEntry;
use App\Models\OrderEntryFile;
use App\Models\OrderSetting;
use App\Models\OrderStatus;

use Illuminate\Support\Facades\Validator;

class OrderEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        echo '<pre>';print_r('index');exit;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        echo '<pre>';print_r('create');exit;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        echo '<pre>';print_r($request->all());exit;
        $validation = Validator::make($request->all(), [
            'LoanNumer' => 'required',
            'CustomerUID' => 'required',
            'PrelimFile' => 'required|max:20000|mimes:pdf',
            // 'File.*' => 'mimes:pdf,xlsx,docx,txt,zip'
        ]);

        /** form validation */
        if ($validation->fails()) {
            return response()->json($validation->errors());
        } else {

            $OrderNumber = $this->GenerateOrderNumber();

            /** check order number is empty or not empty */
            if ($OrderNumber['Response State'] == '200') {

                $InsertData = new OrderEntry([
                    'OrderNumber' => $OrderNumber['OrderNumber'],
                    'OrderEntryDate' => date('Y-m-d H:m:s', strtotime($request->input('OrderEntryDate'))),
                    'LoanNumer' => $request->input('LoanNumer'),
                    'LoanTypeUID' => $request->input('LoanTypeUID'),
                    'CustomerUID' => $request->input('CustomerUID'),
                    'LenderUID' => $request->input('LenderUID'),
                    'ClosingDate' => date('Y-m-d H:m:s', strtotime($request->input('ClosingDate'))),
                    'Status' => 1,
                    'CreatedByUserUID' => $request->input('CreatedByUserUID'),
                    'CreatedByDateTime' => date('Y-m-d H:m:s')
                ]);

                /** check insert or not insert */
                if ($InsertData->save()) {
                    /** check last insert id */
                    if (!empty($InsertData->OrderUID)) {

                        $data = [];
                        $SupportFileInsertState = [];
                        $PrelimFileInsertState = [];

                        /** check prelim file is empty or not empty */
                        if ($request->hsafile('PrelimFile')) {
                            $PrelimFile = $request->file('PrelimFile');

                            $FileName=$PrelimFile->getClientOriginalName();

                            $NewFileName = $FileName;
                            $FilePath = $PrelimFile->storeAs('OrderDocuments', $NewFileName);

                            $FileInsertArray = new OrderEntryFile([
                                'OrderUID' => $InsertData->OrderUID,
                                'DocumentName' => $NewFileName,
                                'DocumentTypeUID' => 1,
                                'FilePath' => $FilePath,
                                'CreatedByUserUID' => $request->input('CreatedByUserUID'),
                                'CreatedByDateTime' => date('Y-m-d H:m:s')
                            ]);

                            if ($FileInsertArray->save()) {
                                $PrelimFileInsertState['State'] = '200';
                            } else {
                                $PrelimFileInsertState['State'] = '500';                              
                            }

                        } else {
                            return response()->json([
                                'Method' => 'Order Insert', 
                                'Request State Response' => '404',
                                'Message' => 'File Is Not Available'
                            ]);
                        }
                        /** end */

                        /** check supporting file is exits or not empty */
                        if($request->hasfile('SupportingFile'))
                        {
                            /**
                             * Order Document Supporting File Processing
                             * @var $request->file('File')
                             */
                            foreach($request->file('SupportingFile') as $key => $file)
                            {
                                $DocumentType = $request->input('DocumentTypeUID');
                                $FileName=$file->getClientOriginalName();

                                $NewFileName = $FileName;
                                $FilePath = $file->storeAs('OrderDocuments', $NewFileName);

                                $FileInsertArray = new OrderEntryFile([
                                    'OrderUID' => $InsertData->OrderUID,
                                    'DocumentName' => $NewFileName,
                                    'DocumentTypeUID' => $DocumentType[$key],
                                    'FilePath' => $FilePath,
                                    'CreatedByUserUID' => $request->input('CreatedByUserUID'),
                                    'CreatedByDateTime' => date('Y-m-d H:m:s')
                                ]);

                                if ($FileInsertArray->save()) {
                                    $SupportFileInsertState['State'] = '200';
                                } else {
                                    $SupportFileInsertState['State'] = '500';                              
                                }
                            }
                            /** end */
                        }
                        /** end */

                        /**
                         * check insert state
                         */
                        if ($PrelimFileInsertState['State'] == '200') {
                            return response()->json([
                                'Method' => 'Order Insert', 
                                'Request State Response' => '200',
                                'Message' => 'Order Created Successfully'
                            ]);
                        } else {
                            return response()->json([
                                'Method' => 'Order Insert', 
                                'Request State Response' => '500',
                                'Message' => 'Order Created Faild'
                            ]);
                        }
                        /** end */
                    }
                    else {
                        return response()->json([
                            'Method' => 'Order Insert', 
                            'Request State Response' => '500',
                            'Message' => 'Database Error'
                        ]);
                    }
                    /** end */
                }
                else {            
                    return response()->json([
                        'Method' => 'Order Insert', 
                        'Request State Response' => '500',
                        'Message' => 'Database Error'
                    ]);  
                }
                /** end */
            } else {
                return response()->json([
                    'Method' => 'Order Insert', 
                    'Request State Response' => $OrderNumber['Response State'],
                    'Message' => $OrderNumber['Message']
                ]);
            }
            /** end */
        }
        /** end */
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderEntry  $orderEntry
     * @return \Illuminate\Http\Response
     */
    public function show(OrderEntry $orderEntry)
    {
        echo '<pre>';print_r('show');exit;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderEntry  $orderEntry
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderEntry $orderEntry)
    {
        echo '<pre>';print_r('edit');exit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderEntry  $orderEntry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderEntry $orderEntry)
    {
        echo '<pre>';print_r('update');exit;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderEntry  $orderEntry
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderEntry $orderEntry)
    {
        echo '<pre>';print_r('destroy');exit;
    }

    /**
     * [GenerateOrderNumber description]
     * @author mohindarkumar-v <mohindar.kumar@avanzegroup.com>
     * @param empty
     * @throws exceptions
     * @version CD Automation [CD-05]
     * @since 22-FEB-2021
     * @return New Order Number
     */
    function GenerateOrderNumber()
    {
        $GetOrderSettings = OrderSetting::where('Active', 1)->get()->toArray();

        $Prefix = "";
        $StartNumber = "";
        $OrderNumber = "";        

        /** check order setting is empty or not empty */
        if (!empty($GetOrderSettings)) {

            /**
             * [order settings process]
             * @var [GetOrderSettings]
             */
            foreach ($GetOrderSettings as $index => $settings) {

                /**
                 * Get Order Number Genarate Prefix & Starting Number
                 */
                switch ($settings['OrderSettingName']) {

                    case 'Prefix':
                        $Prefix = $settings['OrderSettingValue'];
                        break;

                    case 'Starting Number':
                        $StartNumber = $settings['OrderSettingValue'];
                        break;
                    
                    default:
                        $Prefix = "";
                        $StartNumber = "1";
                        break;
                }
                /** end */
                
            } 
            /** end */

            $checktOrders = OrderEntry::latest('OrderNumber')->first()->toArray();

            /** check table is empty or not empty */
            if (empty($checktOrders)) {
                $OrderNumber = $Prefix.$StartNumber;
            } else {

                $LastOrderNumber = $checktOrders['OrderNumber'];
                $OrderNumberRegex = "/[0-9]{5}/";
                $CheckRegex = preg_match($OrderNumberRegex, $LastOrderNumber, $match);
                $RegexResult = $match[0];

                $GenarateOrderNumber = $RegexResult + 1;

                $OrderNumber = $Prefix.$GenarateOrderNumber;

                $ResponseData = array(
                    'Response State' => '200',
                    'Message' => 'Order Number Genarate Success',
                    'OrderNumber' => $OrderNumber
                );

            }
            /** end */
        } else {
            $ResponseData = array(
                'Response State' => '500',
                'Message' => 'Configure in your Order Settings'
            );
        }
        /** end */
        return $ResponseData;
    }
    /** end */
}
