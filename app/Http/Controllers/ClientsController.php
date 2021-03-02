<?php

namespace App\Http\Controllers;

use App\Models\mClients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return mClients::all();
        $UserLists = mClients::all()->toArray();
        return response()->json([
            'status'=>'success',
            'data'=>$UserLists
        ]);
        // return array_reverse($UserLists);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validation = Validator::make($request->all(), [
            'ClientNumber' => 'required',
            'ClientName' => 'required',
            'Email' => 'required|Email|unique:mClients',
            'Phone' => 'required',
            'AddressLine1' => 'required',
            'CityName' => 'required',
            'CountyName' => 'required',
            'StateName' => 'required',
            'Notes' => 'required'
        ]);

        if ($validation->fails()) {
            $error = $validation->messages();
            $result = [
                'status'=>'failed',
                'message'=>'Please provide the required Data',
                'errors'=>$error
            ];
            return response()->json($result, 200);
        } 
        else{

            $Clientresult = new mClients([
                    'ClientNumber' => $request->input('ClientNumber'),
                    'ClientName' => $request->input('ClientName'),
                    'Phone' => $request->input('Phone'),
                    'Email' => $request->input('Email'),
                    'AddressLine1' => $request->input('AddressLine1'),
                    'CityName' => $request->input('CityName'),
                    'CountyName' => $request->input('CountyName'),
                    'StateName' => $request->input('StateName'),
                    'Notes' => $request->input('Notes'),
                    'Active' => '1'
                    // 'CreatedByUserUID' => '1',
                    // 'CreatedDateTime' => Carbon::now(),
                    // 'ModifiedByUserUID' => '1',
                    // 'ModifiedDateTime' =>Carbon::now()
            ]);
            if($Clientresult->save())
            {
                return response()->json([
                    'status' => true,
                    'type' => 'Insert',
                    'errors' => '',
                    'message' => 'Client Created Successfully'
                ], 200);
            }
            else
            {
                return response()->json([
                    'status' => false,
                    'type' => 'Insert',
                    'errors' => '',
                    'message' => 'Failed'
                ], 200);
            }
        }
    }


    public function show($id)
    {
        // $GetClient = mClients::find($id);
        // return response()->json($GetClient);

        $GetClient=DB::table('mclients')
                    ->select('mclients.*','musers.UserName')
                    ->join('musers','mclients.CreatedByUserUID','=','musers.UserUID')
                    ->where('ClientUID',$id)
                    ->get();
        // return response()->json($GetClient);
    // $Client=array();
    // $data=count($GetClient);
   foreach($GetClient as $key=>$val)
    {
        $joinarray=array(
            'ClientNumber'=>$val->ClientNumber,
            'ClientName'=>$val->ClientName,
            'Phone'=>$val->Phone,
            'Email'=>$val->Email,
            'AddressLine1'=>$val->AddressLine1,
            'CityName'=>$val->CityName,
            'CountyName'=>$val->CountyName,
            'StateName'=>$val->StateName,
            'Notes'=>$val->Notes,
            'Active'=>$val->Active,
            'UserName'=>$val->UserName
            
        );
    }
    return response()->json($joinarray);

    }
    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\mClients  $mClients
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        
        //
        // $validator = Validator::make($request->all(), [
        //     'Email'=>'email|required',
        //     'Password'=>'required|min:5',
        //     'device_name' => 'required',
        // ]);

        // if ($validator->fails()) {
        //     $error = $validator->messages();
        //     $result = [
        //         'status'=>'failed',
        //         'message'=>'Please provide the required Data',
        //         'errors'=>$error
        //     ];
        //     return response()->json($result, 200);
        // } 

        $ClientUID=mClients::find($id);
        // $ClientUID->ClientUID = $request->ClientUID;
        // $ClientUID->save();


        $updateDetails=$request->all();

        if($ClientUID->update($updateDetails)){
            return response()->json([
                'type' => 'Update',
                'status' => true,
                'errors' => '',
                'message' => 'Update Successfully'
            ], 200);
        }
        else
        {
            return response()->json([
                'status' => false,
                'type' => 'Update',
                'errors' => '',
                'message' => 'Failed'
            ], 200);
        }
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\mClients  $mClients
     * @return \Illuminate\Http\Response
     */
    public function destroy(mClients $mClients)
    {
        //
    }
}
