<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('register', [AuthController::class, 'showRegister'])->name('Auth.Register');
Route::post('register', [AuthController::class, 'register'])->name('Auth.Register');

Route::get('login', [AuthController::class, 'showLogin'])->name('Auth.Login');
Route::post('login', [AuthController::class,'login'])->name('Auth.Login');


Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');



require __DIR__ . '/auth.php';
