<?php

namespace App\Http\Controllers\Job;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class IndexController extends Controller
{
    function __invoke(Request $request, $id)
    {
        return response()->json(Job::find($id));
    }
}
