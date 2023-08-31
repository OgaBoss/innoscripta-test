<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication\RegisterController;
use App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Authentication\MeController;
use App\Http\Controllers\Authentication\SetPreferenceController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', RegisterController::class);

Route::post('login', LoginController::class);

Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::get('me', MeController::class);

    Route::post('preferences', SetPreferenceController::class);
});
