<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderEntryFile extends Model
{
    use HasFactory;

    use HasFactory;
    protected $primaryKey = 'DocumentUID';
    public $timestamps = false;

    protected $table = 'tOrdersDocuments';

    protected $fillable = [
    	'OrderUID',
    	'DocumentName',
    	'DocumentTypeUID',
    	'FilePath',
    	'OcrStatus',
    	'CreatedByUserUID',
    	'ModifiedByUserUID',
    	'CreatedByDateTime',
    	'ModifiedByDateTime'
    ];
}
