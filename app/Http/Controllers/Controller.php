<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

abstract class Controller
{
    public function index(){
        echo "Hello World";
        $data = DB::table('users')->get();
        return $data;
    }
}
