<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\OrderEntryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');

Route::middleware([])->group(function () {
    
    Route::get('user', function (Request $request) {
        return $request->user();
    });

    
    Route::get('logout', 'App\Http\Controllers\Api\AuthController@logout');
    Route::get('myorders/fetchorders', 'App\Http\Controllers\Api\MyOrdersController@fetchMyOrders');
    // Route::get('showclient','App\Http\Controllers\ClientsController@show');

    Route::post('client','App\Http\Controllers\ClientsController@index');
    
    Route::resource('/notes', NoteController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/clients', ClientsController::class);
    Route::resource('orderentry', OrderEntryController::class);
    Route::get('fetchOrderDocs/{OrderUID}', 'App\Http\Controllers\OrderEntryController@GetOrderDocumentsByOrderUID');

});
