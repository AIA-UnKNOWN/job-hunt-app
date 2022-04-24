<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth;
use App\Http\Controllers\Recruiter;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', Auth\RegisterController::class);
Route::post('/login', Auth\LoginController::class);
Route::middleware('auth:sanctum')->delete('/logout', Auth\LogoutController::class);

Route::prefix('/recruiter')->group(function () {
    Route::post('/post-job', Recruiter\PostJobController::class)->middleware('auth:sanctum');
    Route::delete('/delete-job/{jobId}', Recruiter\DeleteJobController::class)->middleware('auth:sanctum');
});