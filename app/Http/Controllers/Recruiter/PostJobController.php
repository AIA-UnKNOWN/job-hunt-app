<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class PostJobController extends Controller
{
    function __invoke(Request $request)
    {
        $job = new Job;
        $job->title = $request->get('title');
        $job->description = $request->get('description');
        $job->min_salary = $request->get('min_salary');
        $job->max_salary = $request->get('max_salary');
        $job->user_id = $request->user()->id;
        $job->save();
        return response()->json(201);
    }
}
