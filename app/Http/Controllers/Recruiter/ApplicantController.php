<?php

namespace App\Http\Controllers\Recruiter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Applicant;

class ApplicantController extends Controller
{
    function __invoke(Request $request, $applicantId)
    {
        $applicant = Applicant::find($applicantId);
        $applicant->status = $request->get('status');
        $applicant->save();
        return response()->json(204);
    }
}
