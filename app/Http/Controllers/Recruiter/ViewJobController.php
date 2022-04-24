<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class ViewJobController extends Controller
{
    function __invoke(Request $request, $jobId)
    {
        return response()->json(Job::find($jobId));
    }
}
