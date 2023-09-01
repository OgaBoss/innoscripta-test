<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication\RegisterController;
use App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Authentication\MeController;
use App\Http\Controllers\Authentication\SetPreferenceController;
use App\Http\Controllers\NewsFeed\SourceController;
use App\Http\Controllers\NewsFeed\CategoryController;
use App\Http\Controllers\NewsFeed\AuthorController;
use App\Http\Controllers\NewsFeed\SourceCategoryController;
use App\Http\Controllers\NewsFeed\SourceAuthorController;
use App\Http\Controllers\NewsFeed\NewsFeedController;

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
], function () {
    Route::get('me', MeController::class);

    Route::post('preferences', SetPreferenceController::class);

    Route::get('sources', SourceController::class);

    Route::get('authors', AuthorController::class);

    Route::get('categories', CategoryController::class);

    Route::get('sources/{id}/categories', SourceCategoryController::class);

    Route::get('sources/{id}/authors', SourceAuthorController::class);

    Route::get('news', NewsFeedController::class);
});
