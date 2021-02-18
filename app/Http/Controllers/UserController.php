<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        print_r('index');exit;
        $Userlists = User::all()->toArray();
        return array_reverse($Userlists);
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        echo "<pre/>";print_r('show');exit;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        echo "<pre/>";print_r('edit');exit;
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
        echo "<pre/>";print_r('update');exit;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        echo "<pre/>";print_r('destroy');exit;
    }
}
