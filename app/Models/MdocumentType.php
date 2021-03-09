<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mDocumentType extends Model
{
    use HasFactory;
    protected $primaryKey = 'DocumentTypeUID';
    public $timestamps = false;

    protected $table = 'mDocumentType';
    
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