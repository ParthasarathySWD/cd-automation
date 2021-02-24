<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');
Route::middleware('auth:sanctum')->get('logout', 'App\Http\Controllers\Api\AuthController@logout');

Route::middleware('auth:sanctum')->resource('/notes', NoteController::class);
Route::middleware('auth:sanctum')->resource('/users', UserController::class);
Route::middleware('auth:sanctum')->resource('orderentry', OrderEntryController::class);