<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mInputTypeUID extends Model
{
    use HasFactory;
    protected $primaryKey = 'InputTypeUID';
    
    protected $table = 'mInputTypeUID';
    protected $fillable = [
        'InputTypeUID',
        'InputTypeName',
        'InputTypeContent',
        'Active',

    ];
}
