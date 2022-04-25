<?php

namespace App\Http\Controllers\Job;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Applicant;

class ApplyController extends Controller
{
    function __invoke(Request $request, $id)
    {
        $applicant = new Applicant;
        $applicant->user_id = $request->user()->id;
        $applicant->job_id = $id;
        $applicant->save();
        return response()->json(201);
    }
}
