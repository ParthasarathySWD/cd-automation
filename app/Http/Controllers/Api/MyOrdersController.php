<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrderEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class MyOrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function fetchMyOrders(Request $request)
    {


        $rowCount   = $request->rowCount | 10;
        $page       = ($request->page - 1);
        $searchText = $request->searchText;
        $user=$request->user;
        $status=$request->status;
        $fromdate=$request->fromdate;
        $startDate=date('Y-m-d', strtotime($fromdate));
        $todate=$request->todate;
        $endDate=date('Y-m-d',strtotime($todate));

            // print_r($status);
    
            $schema = DB::table('tOrders')
                ->select('tOrders.*','mOrderStatus.StatusName','mClients.ClientName')
                ->join('mOrderStatus','tOrders.StatusUID','=','mOrderStatus.StatusUID')
                ->join('mClients','tOrders.ClientUID','=','mClients.ClientUID');

            if(!empty($status))
            {
                $schema->where('tOrders.StatusUID','=',$status);
            }
            if(!empty($user))
            {
                $schema->where('tOrders.ClientUID','=',$user);
            }
            if((!empty($startDate))&&(!empty($endDate)))
            {
                $schema->where('tOrders.OrderEntryDate','>=',$startDate);
                $schema->where('tOrders.OrderEntryDate','<=',$endDate);
            }
        
        $data = $schema->skip($rowCount * $page)->take($rowCount)->get();
        $count = $schema->count();

        return response()->json([
            'data' => $data,
            'total' => $count,
            'per_page' => $rowCount,
            'total_pages' => abs( $count/$rowCount ),
            'status' => $status,
            'user' => $user,
            'fromdate' => $startDate,
            'todate' => $endDate
        ], 200);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function fetchOptions(Request $request)
    {


        $clients = DB::table('mClients')->get();
        $allusers = DB::table('mUsers')->get();
        $status = DB::table('mOrderStatus')->get();

        return response()->json([
            'clients' => $clients,
            'allusers' => $allusers,
            'status' => $status
        ], 200);


    }

    public function fetchMyOrdersCount(Request $request)
    {
        $AllCount = $this->getCount('All');
        $InProgressCount = $this->getCount('In Progress');
        $CompletedCount = $this->getCount('Completed');
        
        return response()->json([
            'All' => $AllCount,
            'InProgress' => $InProgressCount,
            'Completed' => $CompletedCount
        ]);
    }

    public function getCount($Status)
    {
        $schema = DB::table('tOrders')
            ->select('tOrders.*','mOrderStatus.StatusName','mClients.ClientName')
            ->join('mOrderStatus','tOrders.StatusUID','=','mOrderStatus.StatusUID')
            ->join('mClients','tOrders.ClientUID','=','mClients.ClientUID');
         
        if($Status == 'In Progress')
        {
            $schema->where('tOrders.StatusUID','!=', '100');
        } 
        if($Status == 'Completed')
        {
            $schema->where('tOrders.StatusUID','=', '100');
        } 
        return $schema->count();       
    }
    

}
