<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderEntry;
use App\Models\OrderEntryFile;
use App\Models\OrderSetting;
use App\Models\OrderStatus;

use Carbon\Carbon;

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
        $OrderList = OrderEntry::where('UserUID', 1)->get();
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
        $validation = Validator::make($request->all(), [
            'LoanNumer' => 'required',
            'CustomerUID' => 'required',
            'PrelimFile' => 'required|max:20000|mimes:pdf',
            // 'File.*' => 'mimes:pdf,xlsx,docx,txt,zip'
        ]);

        /** form validation */
        if ($validation->fails()) {
            return response()->json($validation->messages(), 402);
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
                    'StatusUID' => 1,
                    'CreatedByUserUID' => $request->input('CreatedByUserUID'),
                    'CreatedByDateTime' => date('Y-m-d H:m:s')
                ]);

                /** check insert or not insert */
                if ($InsertData->save()) {
                    /** check last insert id */
                    if (!empty($InsertData->OrderUID)) {

                        $data = [];
                        $SupportFileInsertState = [];
                        $PrelimFileInsertState = "";

                        /** check prelim file is empty or not empty */
                        if ($request->hasFile('PrelimFile')) {
                            $PrelimFile = $request->file('PrelimFile');

                            $FileName=$PrelimFile->getClientOriginalName();

                            $NewFileName = $FileName;
                            $FilePath = $PrelimFile->storeAs('OrderDocuments', $NewFileName);

                            $PrelimFileInsertArray = new OrderEntryFile([
                                'OrderUID' => $InsertData->OrderUID,
                                'DocumentName' => $NewFileName,
                                'DocumentTypeUID' => 1,
                                'FilePath' => $FilePath,
                                'CreatedByUserUID' => $request->input('CreatedByUserUID'),
                                'CreatedByDateTime' => date('Y-m-d H:m:s')
                            ]);

                            if ($PrelimFileInsertArray->save()) {
                                $PrelimFileInsertState = '200';
                            } else {
                                $PrelimFileInsertState = '500';                              
                            }

                        } else {
                            return response()->json([
                                'type' => 'Order Insert',
                                'status' => false,
                                'errors' => 'Prelim File Not Found', 
                                'message' => 'File Is Not Available'
                            ], 404);
                        }
                        /** end */

                        /** check supporting file is exits or not empty */
                        if($request->hasFile('SupportingFile'))
                        {
                            /**
                             * Order Document Supporting File Processing
                             * @var $request->file('File')
                             */
                            foreach($request->file('SupportingFile') as $key => $file)
                            {
                                $DocumentType = $request->input('DocumentTypeUID');
                                $FileName = $file->getClientOriginalName();
                                $Extension = $file->getClientOriginalExtension();
                                $AllowedExtension = array('pdf');
                                $NewFileName = $FileName;


                                if (!in_array($Extension, $AllowedExtension)) {
                                    return response()->json([
                                        'type' => 'Order Insert',
                                        'status' => false,
                                        'errors' => 'Should Allowed PDF Files Only', 
                                        'message' => 'Supporting Files are <b> '.$NewFileName.' </b> Should Allowed PDF Only'
                                    ], 406);
                                    
                                } else {

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
                            }
                            /** end */
                        }
                        /** end */

                        /**
                         * check insert state
                         */
                        if ($PrelimFileInsertState == '200') {
                            return response()->json([
                                'type' => 'Order Insert',
                                'status' => true,
                                'errors' => '', 
                                'message' => 'Order Created Successfully'
                            ], 200);
                        } else {
                            return response()->json([
                                'type' => 'Order Insert', 
                                'status' => false,
                                'errors' => '', 
                                'message' => 'Order Created Faild'
                            ], 417);
                        }
                        /** end */
                    }
                    else {
                        return response()->json([
                            'type' => 'Order Insert',
                            'status' => false,
                            'errors' => 'Database Error', 
                            'message' => 'Order Files Created Faild'
                        ], 500);
                    }
                    /** end */
                }
                else {            
                    return response()->json([
                        'type' => 'Order Insert',
                        'status' => false,
                        'errors' => 'Database Error', 
                        'message' => 'Order Created Faild'
                    ], 500);  
                }
                /** end */
            } else {
                return response()->json([
                    'type' => 'Order Insert', 
                    'status' => false,
                    'errors' => 'Database Error',
                    'message' => $OrderNumber['message']
                ], $OrderNumber['Response State']);
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

            $checktOrders = OrderEntry::latest('OrderNumber')->first();
            // dd($checktOrders);

            /** check table is empty or not empty */
            if (empty($checktOrders) && $checktOrders == null) {
                $OrderNumber = $Prefix.$StartNumber;
                return $ResponseData = array(
                    'Response State' => '200',
                    'message' => 'Order Number Genarate Success',
                    'OrderNumber' => $OrderNumber
                );
            } else {
                $checktOrders->toArray();

                $LastOrderNumber = $checktOrders['OrderNumber'];
                $OrderNumberRegex = "/[0-9]{5}/";
                $CheckRegex = preg_match($OrderNumberRegex, $LastOrderNumber, $match);
                $RegexResult = $match[0];

                $GenarateOrderNumber = $RegexResult + 1;

                $OrderNumber = $Prefix.$GenarateOrderNumber;

                $ResponseData = array(
                    'Response State' => '200',
                    'message' => 'Order Number Genarate Success',
                    'OrderNumber' => $OrderNumber
                );

            }
            /** end */            
        } else {
            $ResponseData = array(
                'Response State' => '500',
                'message' => 'Configure in your Order Settings'
            );
        }
        /** end */ 
        return $ResponseData;       
    }
    /** end */
}
