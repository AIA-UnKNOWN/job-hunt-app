<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MyJobPostingsController extends Controller
{
    function __invoke(Request $request)
    {
        $myJobPostings = DB::table('jobs')
            ->where('user_id', $request->user()->id)
            ->get();
        return response()->json($myJobPostings);
    }
}
