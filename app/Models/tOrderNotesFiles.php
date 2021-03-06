<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tOrderNotesFiles extends Model
{
    use HasFactory;
    protected $primaryKey = 'NotesFileUID';
    public $timestamps = false;
    protected $table = 'tOrderNotesFiles';

    protected $fillable = [
        'NotesUID',
        'DocumentName',
        'FilePath',
        'CreatedByUserUID',
        'CreatedByDateTime'
    ];
}
