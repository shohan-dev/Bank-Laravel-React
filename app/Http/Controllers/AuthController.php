<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AuthController extends Controller
{

    public function showRegister(){
        return Inertia::render('Auth/Register');

    }
    public function showLogin(){
        return Inertia::render('Auth/Login');

    }

    public function register(Request $request){

        // extract data from fullName and assign it to first_name and last_name
        $nameParts = explode(' ', $request->fullName);
        if (count($nameParts) > 2) {
            $lastName = array_pop($nameParts);
            $firstName = implode(' ', $nameParts);
        } else {
            $firstName = implode(' ', $nameParts);
            $lastName = '';
        }



        DB::table('users')->insert([
            'first_name' => $firstName,
            'last_name'  => $lastName,
            'email'=> $request->email,
            'password'=> bcrypt($request->password),
        ]);

        return redirect()->route('Auth.Login');
    }
    public function login(Request $request){

    }

    public function data(Request $request)

    {

        dd($request->all());
        return response()->json([
            'message' => 'Data received successfully!',
            'data' => $request->all()
        ]);
    }

    public function showdata(){
        return Inertia::render('demo');
    }



}
