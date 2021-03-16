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
        // echo '<pre> Input';print_r($request->input());
        // echo '<pre> Order FIle';print_r($request->file('OrderFiles'));
        // echo '<pre> Client';print_r($request->input('ClientUID'));
        // echo '<pre> User';print_r($UserUID);
        // exit;
        
        $UserDetails = $request->user()->toArray();
        $UserUID = $UserDetails['UserUID'];

        $validation = Validator::make($request->all(), [
            'LoanNumber' => 'required',
            'OrderFiles' => 'required',
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

            $DocumentType = $request->input('DocumentTypeUID');

            $OrderNumber = $this->GenerateOrderNumber();

            /** check order number is empty or not empty */
            if ($OrderNumber['Response State'] == '200') {

                $MockDocument = ($request->input('mock_docs') == 'Yes') ? 1:0;
                $SourceDocumnet = ($request->input('source_docs')== 'Yes') ? 1:0;
                $ManualEdit = ($request->input('mannual_edit')== 'Yes') ? 1:0;

                $InsertData = new OrderEntry([
                    'OrderNumber' => $OrderNumber['OrderNumber'],
                    'OrderEntryDate' => Carbon::now(),
                    'LoanNumer' => $request->input('LoanNumber'),
                    'ClientUID' => $request->input('ClientUID'),
                    'MockDocument' => $MockDocument,
                    'SourceDocument' => $SourceDocumnet,
                    'ManualEdit' => $ManualEdit,
                    'StatusUID' => 1,
                    'CreatedByUserUID' => $UserUID,
                    'CreatedByDateTime' =>Carbon::now()
                ]);

                // dd($InsertData);
                /** check insert or not insert */
                if ($InsertData->save()) {
                    /** check last insert id */
                    if (!empty($InsertData->OrderUID)) {

                        $data = [];
                        $OrderFileInsertState = [];                        

                        /** check order file is exits or not empty */
                        if($request->hasFile('OrderFiles'))
                        {
                            /**
                             * Order Document Order File Processing
                             * @var $request->file('File')
                             */
                            
                            foreach($request->file('OrderFiles') as $key => $file)
                            {
                                // echo '<pre>';print_r($file);

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
                                        'message' => 'Order Files are <b> '.$NewFileName.' </b> Should Allowed PDF Only'
                                    ]);

                                } else {

                                    $FilePath = $file->storeAs('OrderDocuments', $NewFileName);

                                    $FileInsertArray = new OrderEntryFile([
                                        'OrderUID' => $InsertData->OrderUID,
                                        'DocumentName' => $NewFileName,
                                        'DocumentTypeUID' => $DocumentType[$key],
                                        'FilePath' => $FilePath,
                                        'OcrStatus' => 1,
                                        'CreatedByUserUID' => $UserUID,
                                        'CreatedByDateTime' => date('Y-m-d H:m:s')
                                    ]);                                        
                                    if ($FileInsertArray->save()) {
                                        $OrderFileInsertState['State'] = '200';
                                    } else {
                                        $OrderFileInsertState['State'] = '500';
                                    }
                                }
                            }
                            /** end */
                        }
                        /** end */

                        /**
                         * check insert state
                         */
                        // echo '<pre>';print_r($OrderFileInsertState['State']);
                        if ($OrderFileInsertState['State'] == '200') {
                            return response()->json([
                                'type' => 'Order Insert',
                                'status' => true,
                                'errors' => '',
                                'message' => 'Order '. $OrderNumber['OrderNumber'].' Created Successfully',
                                'orderuid' => $InsertData->OrderUID,
                                'orderno' => $InsertData->OrderNumber
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
                    $Prefix = "CD";
                    $StartNumber = "10001";
                    break;
                }
                /** end */

            }
            /** end */
        } else {
            $Prefix = "CD";
            $StartNumber = "10001";
        }

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
        // } else {
        //     $ResponseData = array(
        //         'Response State' => '500',
        //         'message' => 'Configure in your Order Settings'
        //     );
        // }
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
            ->select('tOrdersDocuments.*', 'mDocumentTypes.DocumentTypeName', 'mUsers.UserName', 'mDocumentStatus.StatusName', 'mDocumentStatus.StatusColor')        
            ->leftJoin('mDocumentTypes', 'mDocumentTypes.DocumentTypeUID', '=', 'tOrdersDocuments.DocumentTypeUID')
            ->leftJoin('mUsers', 'mUsers.UserUID', '=', 'tOrdersDocuments.CreatedByUserUID')            
            ->leftJoin('mDocumentStatus', 'mDocumentStatus.StatusUID', '=', 'tOrdersDocuments.OcrStatus')            
            ->where('tOrdersDocuments.OrderUID', '=', $OrderUID)
            ->get();
            $RowArray = array();
            $count = 0;
        foreach ($OrderDocs as $resKey => $resValue) {
            $count++;
            $ClassName = $this->DocumentStatusColor($resValue->StatusName);
            // echo '<pre>';print_r($ClassName['StatusClass']);exit;
            $ColumnArray = array(
                'id' => $count,
                'documentid' => $resValue->DocumentUID,
                'document' => $resValue->DocumentName,
                'type' => $resValue->DocumentTypeName,
                'ocrstatus' => $resValue->StatusName,
                'ocrstatuscolor' => $ClassName['StatusClass'],
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
     * Get Order Documnet Status Color Class
     * @author mohindarkumar-v <mohindar.kumar@avanzegroup.com>
     * @param StatusName
     * @throws exceptions
     * @version CD Automation []
     * @since 16-MAR-2021
     * @return Status Color
     */
    public function DocumentStatusColor($StatusName)
    {
        switch ($StatusName) {
            case 'OCR Not Started':
                return(
                    array(
                        'StatusClass' => 'text-xs px-1 bg-theme-17 text-white rounded-md mr-1'
                    )
                );
                break;
            case 'OCR Inprogress':
                return(
                    array(
                        'StatusClass' => 'text-xs px-1 bg-theme-23 text-black rounded-md mr-1'
                    )
                );
                break;
            case 'OCR Completed':
                return(
                    array(
                        'StatusClass' => 'text-xs px-1 bg-theme-10 text-white rounded-md mr-1'
                    )
                );
                break;
        
            default:
                return(
                    array(
                        'StatusClass' => 'text-xs px-1 bg-theme-17 text-white rounded-md mr-1'
                    )                    
                );
                break;
        }
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
