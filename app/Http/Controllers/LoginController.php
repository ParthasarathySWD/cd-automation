<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Validator;
use Response;
class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {


        //
        $validator = Validator::make($request->all(), [
            'Email'=>'email|required',
            'Password'=>'required|min:5',
            'device_name' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->messages();
            $result = [
                'status'=>'failed',
                'message'=>'Please provide the required Data',
                'errors'=>$error
            ];
            return response()->json($result, 200);
        } 


        $credentials = $request->only('Email', 'Password');
        $credentials = ['email'=>$request->Email, 'password'=>$request->Password];
        if (Auth::guard('web')->attempt($credentials)) {
            $request->session()->regenerate();


            return response()->json([
                'status'=>'success',
                'message'=>'Logged-in Successfully',
            ], 200);

        }

        return response()->json([
            'status'=>'failed',
            'message'=>'The given data was invalid',
            'errors'=>[
                'Password'=> ['Invalid Credentials']
                ]
            ], 200);
    }

        
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'status'=>'success',
            'message'=>'loggedout'
        ]);
        // return redirect('/');
    }
}