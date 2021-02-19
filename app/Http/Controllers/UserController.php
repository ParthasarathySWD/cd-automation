<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

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
        // echo '<pre>';print_r($request->input());exit;
        $validation = Validator::make($request->input(), [
            'FirstName' => 'required',
            'LastName' => 'required',
            'Email' => 'required|email|unique:users',
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors());
        } else {

            $StoreUserDetails = new User([
                'FirstName' => $request->input('FirstName'),
                'LastName' => $request->input('LastName'),
                'PhoneNumber' => $request->input('PhoneNumber'),
                'Email' => $request->input('Email'),
                'UserName' => $request->input('UserName'),
                'Password' => md5($request->input('Password')),
                'RoleUID' => $request->input('RoleUID'),
                'CreatedByDateTime' => $request->input('CreatedByDateTime'),
                'ModifiedByDateTime' => NULL
            ]);

            if ($StoreUserDetails->save()) {
                return response()->json([
                    'Method' => 'Insert', 
                    'Request State Response' => '200',
                    'Message' => 'User Created Successfully'
                ]);
            }
            else {
                return response()->json([
                    'Method' => 'Insert', 
                    'Request State Response' => '500',
                    'Message' => 'User Created Faild'
                ]);  
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
