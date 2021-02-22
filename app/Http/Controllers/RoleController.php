<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $AllLists = Role::all()->toArray();
        return array_reverse($AllLists);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->input(), [
            'RoleName' => 'required|RoleName|unique:mRoles'
        ]);
        if ($validation->fails()) {
            return response()->json($validation->errors());
        } else{
            $StoreDetails = new Role([
                'RoleName' => $request->input('RoleName'),
                'CreatedByDateTime' => date('Y-m-d H:m:s', strtotime($request->input('CreatedByDateTime'))),
                'ModifiedByDateTime' => NULL
            ]);

            if ($StoreDetails->save()) {
                return response()->json([
                    'Method' => 'Insert', 
                    'Request State Response' => '200',
                    'Message' => 'Created Successfully'
                ]);
            }
            else {
                return response()->json([
                    'Method' => 'Insert', 
                    'Request State Response' => '500',
                    'Message' => 'Created Faild'
                ]);  
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $GetDataByID = Role::find($id);
        return response()->json($GetDataByID);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
