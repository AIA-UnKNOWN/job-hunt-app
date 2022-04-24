<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class RegisterController extends Controller
{
    function __invoke(Request $request)
    {
        $input = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email|unique:users',
            'role' => 'required|string',
            'password' => 'required|string|min:8|max:255|confirmed'
        ]);
        $this->createUser($input);
        return response()->json(201);
    }

    private function createUser($input) {
        $user = new User;
        $user->first_name = $input['first_name'];
        $user->last_name = $input['last_name'];
        $user->email = $input['email'];
        $user->role = $input['role'];
        $user->password = Hash::make($input['password']);
        $user->save();
    }
}
