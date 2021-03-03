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

        $schema = DB::table('tOrders')
                ->select('tOrders.*','mOrderStatus.StatusName','mClients.ClientName')
                ->join('mOrderStatus','tOrders.StatusUID','=','mOrderStatus.StatusUID')
                ->join('mClients','tOrders.CustomerUID','=','mClients.ClientUID');


        $data = $schema->skip($rowCount * $page)->take($rowCount)->get();
        $count = $schema->count();

        return response()->json([
            'data' => $data,
            'total' => $count,
            'per_page' => $rowCount,
            'total_pages' => abs( $count/$rowCount )
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

}
