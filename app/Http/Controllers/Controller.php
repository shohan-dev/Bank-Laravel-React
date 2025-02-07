<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

abstract class Controller
{
    public function index(){

        // $data = DB::select(('select * from users'));
        $data = "hello";
        return $data;
    }
}
