<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    public function showRegister(){
        return Inertia::render('Auth/Register');

    }
    public function showLogin(){
        return Inertia::render('Auth/Login');

    }

    public function register(Request $request)
    {





        // Extract the username from the email (before @ symbol)
        $email = $request->email;
        $username = explode('@', $email)[0];

        // Check if the username exists in the database
        $existingUser = DB::table('users')->where('username', $username)->first();

        // If the username already exists, append a number to make it unique
        $counter = 1;
        while ($existingUser) {
            // Append a number to the username (e.g., username1, username2, etc.)
            $usernameWithNumber = "{$username}{$counter}";
            $existingUser = DB::table('users')->where('username', $usernameWithNumber)->first();
            $counter++;
        }

        // Merge the unique username into the request
        $request->merge(['username' => $usernameWithNumber ?? $username]);


        // Insert the new user into the database
        DB::table('users')->insert([
            'name' => $request->first_name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => bcrypt($request->password),
        ]);

        // Redirect to the login page or wherever you'd like
        return redirect()->route('Auth.Login')->with('success', 'Registration successful. Please log in.');
    }
    public function login(Request $request){
        $email = $request->email;
        $checkpass = $request->password;

        $user = DB::table('users')->where('email', $email)->first();
        if ($user) {
            // Update the password directly in the database
            DB::table('users')
                ->where('email', $email)
                ->update(['password' => bcrypt($checkpass)]);

            // add session in debug mode
            

            return redirect()->route('dashboard')->with('success', 'Logged in successfully!');
        } else {
            return redirect()->route('Auth.Login')->with('error', 'Invalid credentials.');
        }
    }







}
