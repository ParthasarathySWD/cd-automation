<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tFormValues extends Model
{
    use HasFactory;

     protected $primaryKey = 'FormValueUID';
    public $timestamps = false;

    protected $table = 'tFormValues';
    
    protected $fillable = [
        'OrderUID',
        'FormFieldUID',
        'FormValue',
        'TemplateUID',
        'Confidence',
    ];
}
