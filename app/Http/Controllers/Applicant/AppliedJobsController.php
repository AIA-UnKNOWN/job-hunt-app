<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Job;

class AppliedJobsController extends Controller
{
    function __invoke(Request $request)
    {
        $appliedJobs = Job::select()
            ->join('applicants', 'jobs.id', '=', 'applicants.job_id')
            ->where('applicants.user_id', $request->user()->id)
            ->get();
        return response()->json($appliedJobs);
    }
}
