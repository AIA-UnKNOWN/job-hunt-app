<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class DeleteJobController extends Controller
{
    function __invoke(Request $request, $jobId)
    {
        $job = Job::find($jobId);
        $job->delete();
        return response()->json(204);
    }
}
