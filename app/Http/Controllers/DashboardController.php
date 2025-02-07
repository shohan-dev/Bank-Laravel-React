<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Http\Controllers\Controller;


class DashboardController extends Controller
{

    public function index(){
        $data = [
            'key1' => 'value1',
            'key2' => 'value2',
            // Add more data as needed
        ];


        return Inertia::render("Dashboard", $data);
    }




}
