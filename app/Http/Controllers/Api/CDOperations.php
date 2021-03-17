<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrderEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CDOperations extends Controller
{
    //

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function fetchFields(Request $request){

        $query = DB::table('mTemplateFields')
                    ->leftJoin('mFormFields', 'mFormFields.FormFieldUID', '=', 'mTemplateFields.FormFieldUID');
         
        $page1 = $query->where('mFormFields.FormPage', '=', 1)
                    ->get();
         
        $page2 = $query->where('mFormFields.FormPage', '=', 2)
                    ->get();
         
        $page3 = $query->where('mFormFields.FormPage', '=', 3)
                    ->get();
         
        $page4 = $query->where('mFormFields.FormPage', '=', 4)
                    ->get();
         
        $page5 = $query->where('mFormFields.FormPage', '=', 5)
                    ->get();

        
        return response()->json([
            'status' => 'ok',
            'page1'=>$page1,
            'page2'=>$page2,
            'page3'=>$page3,
            'page4'=>$page4,
            'page5'=>$page5,
        ]);

        
    }
}
