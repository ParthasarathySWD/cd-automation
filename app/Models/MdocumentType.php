<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdocumentType extends Model
{
    use HasFactory;
    protected $primaryKey = 'DocumentTypeUID';
    public $timestamps = false;

    protected $table = 'MdocumentType';
    
    protected $fillable = [
        'DocumentTypeUID',
        'DocumentTypeName',
        'IsFinal',
        'CreatedByUserUID',
        'CreatedDatetime',
        'ModifiedUserUID',
        'ModifiedDateTime',
        'Active',
    ];
}