<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mTemplateFields extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'mTemplateFields';
    protected $fillable = [
        'TemplateUID',
        'FormFieldUID'
    ];
}
