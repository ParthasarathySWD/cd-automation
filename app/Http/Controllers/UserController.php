<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $UserLists = User::all()->toArray();
        return array_reverse($UserLists);
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
        // echo '<pre>';print_r($request->input());exit;
        $attributes = [
            'RoleUID' => 'Role',
        ];
        $validation = Validator::make($request->input(), [
            'FirstName' => 'required',
            'LastName' => 'required',
            'Email' => 'required|Email|unique:mUsers',
            'PhoneNumber' => 'required|unique:mUsers',
            'UserName' => 'required|unique:mUsers',
            'Password' => 'required',
            'RoleUID' => 'required',
        ], [], $attributes);

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validation->messages(),
                'messages' => 'Form Validation Error'
            ],402);
        } else {

            DB::beginTransaction();
            $StoreUserDetails = new User([
                'FirstName' => $request->input('FirstName'),
                'LastName' => $request->input('LastName'),
                'PhoneNumber' => $request->input('PhoneNumber'),
                'Email' => $request->input('Email'),
                'UserName' => $request->input('UserName'),
                'Password' => md5($request->input('Password')),
                'RoleUID' => $request->input('RoleUID'),
                'CreatedByUserUID' => '1',
                'CreatedByDateTime' => Carbon::now(),
            ]);

            if ($StoreUserDetails->save()) {
                DB::commit();
                return response()->json([
                    'status' => true,
                    'type' => 'Insert',
                    'errors' => '',
                    'message' => 'User Created Successfully'
                ], 200);
            }
            else {
                DB::rollBack();
                return response()->json([
                    'type' => 'Insert', 
                    'status' => false,
                    'errors' => 'Database Error',
                    'message' => 'User Created Faild'
                ], 500);  
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $GetUser = User::find($id);
        return response()->json($GetUser);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $GetUser = User::find($id);
        return response()->json($GetUser);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // echo '<pre>';print_r($id);exit;
        DB::beginTransaction();
        $UpdateDetails = User::find($id);
        $UpdateData = $request->all();

        $UpdateData['ModifiedByDateTime'] = Carbon::now();
        $UpdateData['ModifiedByUserUID'] = '1';        
        if ($UpdateDetails->update($UpdateData)) {
            
            DB::commit();
            return response()->json([
                'type' => 'Update',
                'status' => true,
                'errors' => '',
                'message' => 'Update Successfully'
            ], 200);
        } else {
            DB::rollBack();
            return response()->json([
                'type' => 'Update', 
                'status' => false,
                'errors' => 'Database Error',
                'message' => 'Update Faild'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        $DeleteUser = User::find($id);
        if ($DeleteUser->delete()) {
            DB::commit();
            return response()->json([
                'type' => 'Delete',
                'status' => true,
                'errors' => '',
                'message' => 'Delete Successfully'
            ], 200);
        } else {
            DB::rollBack();
            return response()->json([
                'type' => 'Delete',
                'status' => false,
                'errors' => 'Database Error', 
                'message' => 'Delete Faild'
            ], 500);
        }
    }
}
