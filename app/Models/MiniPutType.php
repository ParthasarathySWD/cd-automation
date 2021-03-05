<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MiniPutType extends Model
{
    use HasFactory;
    protected $primaryKey = 'InputTypeUID';
    
    protected $table = 'MiniPutType';
    protected $fillable = [
        'InputTypeUID',
        'InputTypeName',
        'InputTypeContent',
        'Active',

    ];
}
