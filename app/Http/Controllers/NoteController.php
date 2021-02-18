<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function index()
    {
        $lists = Note::all()->toArray();
        return array_reverse($lists);
    }
}
