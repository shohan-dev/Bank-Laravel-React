
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post('data1', function (Request $request) {
    return response()->json(['success' => true]);
});


?>
