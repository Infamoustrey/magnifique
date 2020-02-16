<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class Authcontroller extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            return auth()->user();
        }
    }

    public function logout()
    {
        auth()->logout();

        return ['message' => 'ok'];
    }

    public function user()
    {
        return auth()->user();
    }
}
