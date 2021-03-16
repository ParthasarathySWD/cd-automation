<?php

namespace App\Http\Controllers;

use App\Models\mTemplates;
use App\Models\mFormFields;
use Illuminate\Http\Request;


class MTemplatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $FieldLists = mFormFields::all()->toArray();
       
        return response()->json([
            'status'=>'success',
            'data'=>$FieldLists
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\mTemplates  $mTemplates
     * @return \Illuminate\Http\Response
     */
    public function show(mTemplates $mTemplates)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\mTemplates  $mTemplates
     * @return \Illuminate\Http\Response
     */
    public function edit(mTemplates $mTemplates)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\mTemplates  $mTemplates
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, mTemplates $mTemplates)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\mTemplates  $mTemplates
     * @return \Illuminate\Http\Response
     */
    public function destroy(mTemplates $mTemplates)
    {
        //
    }
}
