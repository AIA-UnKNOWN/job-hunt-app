<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Applicant;
use Illuminate\Support\Facades\DB;

class JobApplicantsController extends Controller
{
    function __invoke(Request $request, $jobId)
    {
        $applicants = Applicant::select(DB::raw('*'))
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'applicants.user_id');
            })
            ->where('job_id', $jobId)
            ->get();
        return response()->json($applicants);
    }
}
