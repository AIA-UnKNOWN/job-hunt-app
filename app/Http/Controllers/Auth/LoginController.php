<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    function __invoke(Request $request)
    {
        $loggedUser = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
            'role' => 'required|string'
        ]);
        if (! Auth::attempt($loggedUser)) {
            return response()->json(401);
        }
        $user = User::select('users.*')
            ->where('email', $loggedUser['email'])
            ->where('role', $loggedUser['role'])
            ->first();
        $token = $user->createToken("{$user->first_name}'s token")->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 200);
    }
}
