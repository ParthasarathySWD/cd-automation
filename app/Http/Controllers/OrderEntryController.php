<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\OrderEntry;
use App\Models\OrderEntryFile;
use App\Models\OrderSetting;
use App\Models\OrderStatus;
use App\Models\OrderNote;

use Carbon\Carbon;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

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
        // echo '<pre> Prelim';print_r($request->input());
        // echo '<pre> Support';print_r($request->file('PrelimFile'));
        // echo '<pre> Support';print_r($request->file('SupportingFile'));
        // exit;

        $validation = Validator::make($request->all(), [
            'LoanNumber' => 'required',
            'PrelimFile' => 'required|max:20000|mimes:pdf',
            // 'File.*' => 'mimes:pdf,xlsx,docx,txt,zip'
        ]);

        /** form validation */
        if ($validation->fails()) {
            return response()->json([
                'type' => 'Form Validation',
                'errors'=> $validation->messages(),
                'status' => false
            ]);
        } else {

            $UserDetails = $request->user()->toArray();
            $DocumentType = $request->input('DocumentTypeUID');

            if (!empty($DocumentType)) {
                $PrelimDocumentType = array_shift($DocumentType);
                $SupportDocumentType = $DocumentType;
            }
            $OrderNumber = $this->GenerateOrderNumber();

            /** check order number is empty or not empty */
            if ($OrderNumber['Response State'] == '200') {

                $InsertData = new OrderEntry([
                    'OrderNumber' => $OrderNumber['OrderNumber'],
                    'OrderEntryDate' => Carbon::now(),
                    'LoanNumer' => $request->input('LoanNumber'),
                    'ClientUID' => $UserDetails['ClientUID'],
                    'StatusUID' => 1,
                    'CreatedByUserUID' => $UserDetails['UserUID'],
                    'CreatedByDateTime' =>Carbon::now()
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
                            $Extension = $PrelimFile->getClientOriginalExtension();
                            $AllowedExtension = array('pdf');

                            $NewFileName = $FileName;

                            if (!in_array($Extension, $AllowedExtension)) {
                                return response()->json([
                                    'type' => 'Order Insert',
                                    'status' => false,
                                    'errors' => 'Should Allowed PDF Files Only',
                                    'message' => 'Supporting Files are <b> '.$NewFileName.' </b> Should Allowed PDF Only'
                                ]);

                            } else {
                                $FilePath = $PrelimFile->storeAs('OrderDocuments', $NewFileName);
                                $PrelimFileInsertArray = new OrderEntryFile([
                                    'OrderUID' => $InsertData->OrderUID,
                                    'DocumentName' => $NewFileName,
                                    'DocumentTypeUID' => $PrelimDocumentType,
                                    'FilePath' => $FilePath,
                                    'CreatedByUserUID' => $UserDetails['UserUID'],
                                    'CreatedByDateTime' => date('Y-m-d H:m:s')
                                ]);

                                if ($PrelimFileInsertArray->save()) {
                                    $PrelimFileInsertState = '200';
                                } else {
                                    $PrelimFileInsertState = '500';
                                }
                            }

                            

                        } else {
                            return response()->json([
                                'type' => 'Order Insert',
                                'status' => false,
                                'errors' => 'Prelim File Not Found',
                                'message' => 'File Is Not Available'
                            ]);
                        }
                        /** end */

                        /** check supporting file is exits or not empty */
                        if($request->hasFile('SupportingFile'))
                        {
                            /**
                             * Order Document Supporting File Processing
                             * @var $request->file('File')
                             */
                            // echo '<pre>';print_r($request->file('SupportingFile'));

                            foreach($request->file('SupportingFile') as $key => $file)
                            {
                                $DocumentType = $request->input('DocumentTypeUID');
                                $FileName = $file->getClientOriginalName();
                                // $Extension = $file->getClientOriginalExtension();
                                // $AllowedExtension = array('pdf');
                                $NewFileName = $FileName;


                                // if (!in_array($Extension, $AllowedExtension)) {
                                //     return response()->json([
                                //         'type' => 'Order Insert',
                                //         'status' => false,
                                //         'errors' => 'Should Allowed PDF Files Only',
                                //         'message' => 'Supporting Files are <b> '.$NewFileName.' </b> Should Allowed PDF Only'
                                //     ]);

                                // } else {

                                    $FilePath = $file->storeAs('OrderDocuments', $NewFileName);

                                    $FileInsertArray = new OrderEntryFile([
                                        'OrderUID' => $InsertData->OrderUID,
                                        'DocumentName' => $NewFileName,
                                        'DocumentTypeUID' => $SupportDocumentType[$key],
                                        'FilePath' => $FilePath,
                                        'CreatedByUserUID' => $UserDetails['UserUID'],
                                        'CreatedByDateTime' => date('Y-m-d H:m:s')
                                    ]);

                                    if ($FileInsertArray->save()) {
                                        $SupportFileInsertState['State'] = '200';
                                    } else {
                                        $SupportFileInsertState['State'] = '500';
                                    }

                                // }
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
                                'message' => 'Order '. $OrderNumber['OrderNumber'].' Created Successfully',
                                'orderuid' => $InsertData->OrderUID
                            ]);
                        } else {
                            return response()->json([
                                'type' => 'Order Insert',
                                'status' => false,
                                'errors' => '',
                                'message' => 'Order Created Faild'
                            ]);
                        }
                        /** end */
                    }
                    else {
                        return response()->json([
                            'type' => 'Order Insert',
                            'status' => false,
                            'errors' => 'Database Error',
                            'message' => 'Order Files Created Faild'
                        ]);
                    }
                    /** end */
                }
                else {
                    return response()->json([
                        'type' => 'Order Insert',
                        'status' => false,
                        'errors' => 'Database Error',
                        'message' => 'Order Created Faild'
                    ]);
                }
                /** end */
            } else {
                return response()->json([
                    'type' => 'Order Insert',
                    'status' => false,
                    'errors' => 'Database Error',
                    'message' => $OrderNumber['message']
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

    /**
     * Get Order Documents By OrderUID
     * @author mohindarkumar-v <mohindar.kumar@avanzegroup.com>
     * @param OrderUID
     * @throws exceptions
     * @version CD Automation [CD-05]
     * @since 01-MAR-2021
     * @return Order Documents
    */
    public function GetOrderDocumentsByOrderUID(Request $request)
    {
        $OrderUID = $request->input('OrderUID');
        // echo '<pre>';print_r($OrderUID);exit;
        $OrderDocs = DB::table('tOrdersDocuments')    
            ->select('tOrdersDocuments.*', 'mDocumentTypes.DocumentTypeName', 'mUsers.UserName')        
            ->leftJoin('mDocumentTypes', 'mDocumentTypes.DocumentTypeUID', '=', 'tOrdersDocuments.DocumentTypeUID')
            ->leftJoin('mUsers', 'mUsers.UserUID', '=', 'tOrdersDocuments.CreatedByUserUID')            
            ->where('tOrdersDocuments.OrderUID', '=', $OrderUID)
            ->get();
        // echo '<pre>';print_r($OrderDocs);exit;
        $RowArray = array();
        $count = 0;
        foreach ($OrderDocs as $resKey => $resValue) {
            $count++;
            $ColumnArray = array(
                'id' => $count,
                'documentid' => $resValue->DocumentUID,
                'document' => $resValue->DocumentName,
                'type' => $resValue->DocumentTypeName,
                'uploadedon' => $resValue->CreatedByDateTime,
                'uploadedby' => $resValue->UserName,
                'filepath' => Storage::path('OrderDocuments'.$resValue->DocumentName) 
            );
            array_push($RowArray, $ColumnArray);            
        }

        return response()->json([
            'OrginalData' => $OrderDocs->toArray(),
            'TableData' => $RowArray
        ]);

    }
    /** end */

    /**
     * Get Order Notes By OrderUID
     * @author mohindarkumar-v <mohindar.kumar@avanzegroup.com>
     * @param OrderUID
     * @throws exceptions
     * @version CD Automation []
     * @since 04-MAR-2021
     * @return Order Notes
    */
    public function GetOrderNotesByOrderUID(Request $request)
    {
        $OrderUID = $request->input('OrderUID');
        $UserDetails = $request->user();
        // echo '<pre>';print_r($request->user());exit;
        $OrderNotes = DB::table('tOrderNotes')    
            ->select('tOrderNotes.*', 'mUsers.UserName')     
            ->leftJoin('mUsers', 'mUsers.UserUID', '=', 'tOrderNotes.CreatedByUserUID')            
            ->where('tOrderNotes.OrderUID', '=', $OrderUID)
            ->orderBy('CreatedByDateTime', 'asc')
            ->get();
        // echo '<pre>';print_r($OrderNotes);exit;   
        $RowArray = array();
        $count = 0;
        foreach ($OrderNotes as $resKey => $resValue) {
            $count++;
            $NotesDate = date('Y-m-d',strtotime($resValue->CreatedByDateTime));
            $NotesTime = date('H:i A',strtotime($resValue->CreatedByDateTime));
            $FileName = 'Closing instructions - Sample 2.pdf';
            $Extension = 'pdf';

            $ColumnArray = array(
                'id' => $count,
                'NotesUID' => $resValue->NotesUID,
                'OrderUID' => $resValue->OrderUID,
                'Notes' => $resValue->Notes,
                'AttachedFiles' => $resValue->AttachedFiles,
                'AttachedFilesName' => $FileName,
                'AttachedFilesExtension' => $Extension,
                'UserName' => $resValue->UserName,
                'UserImage' => '',
                'UserUID' => $resValue->CreatedByUserUID,
                'Date' => $NotesDate,
                'Time' => $NotesTime,
            );
            array_push($RowArray, $ColumnArray);            
        }         
        // echo '<pre>';print_r($RowArray);exit; 
         return response()->json([
            'OrginalData' => $OrderNotes->toArray(),
            'NotesData' => $RowArray
        ]);
    }
    /** end */
   
}
