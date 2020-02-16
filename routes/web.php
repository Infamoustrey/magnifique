<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {

    Route::prefix('auth')->group(function () {
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::view('/{any}', 'app')->where('any', '.*');
