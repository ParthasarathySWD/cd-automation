<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


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
            'Password'=>'required|min:5'
        ]);

        if ($validator->fails()) {
            $error = $validator->messages();
            $result = [
                'status'=>'failed',
                'message'=>'Please provide the required Data',
                'errors'=>$error
            ];
            return response()->json($result, 402);
        } 

        $credentials = request(['Email', 'Password']);
        $user = DB::table('mUsers')->where('Email', $request->Email)->first();

        // if (!Auth::attempt($credentials)) {
        if( $user )
        {            
            if ( ! Hash::check($request->Password, $user->Password, [])) {
                dd('if');
                return response()->json([
                    'status'=>'failed',
                    'message'=>'The given data was invalid',
                    'errors'=>[
                        'Password'=> ['Invalid Credentials']
                        ]
                    ], 400);
                }
            }
            else{
            dd('else');
                return response()->json([
                    'status'=>'failed',
                    'message'=>'The given data was invalid',
                    'errors'=>[
                        'Password'=> ['Invalid Credentials']
                        ]
                    ], 400);
            }

        $user = User::where('Email', $request->Email)->first();
        $authToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status'=>'success',
            'message'=>'Logged-in Successfully',
            'access-token'=>$authToken
        ], 200);

    }

}
