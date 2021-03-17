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

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('user', function (Request $request) {
        return $request->user();
    });

    Route::get('profile', function(Request $request){
        $user = $request->user();
        if (!empty($user)) {
            return $user;
        }
        else{
            return new stdClass();
        }
    });

    Route::get('logout', 'App\Http\Controllers\Api\AuthController@logout');
    Route::get('myorders/fetchorders', 'App\Http\Controllers\Api\MyOrdersController@fetchMyOrders');
    Route::get('myorders/fetchOptions', 'App\Http\Controllers\Api\MyOrdersController@fetchOptions');
    Route::get('myorders/fetchCount', 'App\Http\Controllers\Api\MyOrdersController@fetchMyOrdersCount');
    // Route::get('showclient','App\Http\Controllers\ClientsController@show');
    
    Route::post('client','App\Http\Controllers\ClientsController@index');
    
    Route::resource('/notes', NoteController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/clients', ClientsController::class);
    Route::resource('orderentry', OrderEntryController::class);
    Route::get('orderdocs/fetchOrderDocs', 'App\Http\Controllers\OrderEntryController@GetOrderDocumentsByOrderUID');
    Route::get('orderdocs/fetchOrderNotes', 'App\Http\Controllers\OrderEntryController@GetOrderNotesByOrderUID');
    Route::post('orderdocs/addNewDocs', 'App\Http\Controllers\OrderEntryController@AddNewDocument');
    Route::get('fetchCDRows', 'App\Http\Controllers\Api\CDOperations@fetchFields');
    Route::get('order/fetchDocumentTypes', 'App\Http\Controllers\OrderEntryController@FetchAllDocumentTypes');
    Route::get('order/fetchClients', 'App\Http\Controllers\OrderEntryController@FetchAllClients');
});
