<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('register', [AuthController::class, 'showRegister'])->name('Auth.Register');
Route::get('login', [AuthController::class, 'showLogin'])->name('Auth.Login');

Route::post('register', [AuthController::class, 'register'])->name('Auth.Register');

Route::post('data', [AuthController::class,'data'])->name('data');
Route::get('data', [AuthController::class,'showdata'])->name('data');



require __DIR__ . '/auth.php';
