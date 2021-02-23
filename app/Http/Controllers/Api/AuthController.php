<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


use Validator;
use Response;

class AuthController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'Email'=>'email|required',
            'Password'=>'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 402);
        } 

        $credientials = $request->only(['Email', 'Password']);
        if (Auth::attempt($credientials)) {
            return response()->json([
                'message'=>'The given data was invalid',
                'errors'=>[
                    'Password'=> ['Invalid Credentials']
                    ]
                ], 422);
        }

        $user = User::where('Email', $request->Email)->first();
        $authToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'access-token'=>$authToken
        ]);

    }

}
