<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\PdfController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::post('/login', 'App\Http\Controllers\LoginController@authenticate');
Route::get('/logout', 'App\Http\Controllers\LoginController@logout');
Route::get('/generate','App\Http\Controllers\PdfController@generatePDF');
// 
Route::any('{catchall}', function(Request $req){
    return view('welcome');
})->where('catchall', '.*');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
