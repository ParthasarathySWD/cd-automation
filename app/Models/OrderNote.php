<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderNote extends Model
{
    use HasFactory;
    protected $primaryKey = 'NotesUID';
    public $timestamps = false;

    protected $table = 'tOrderNotes';

    protected $fillable = [
    	'OrderUID',
    	'Notes',
    	'AttachedFiles',
        'CreatedByUserUID',
    	'CreatedByDateTime'
    ];
}
