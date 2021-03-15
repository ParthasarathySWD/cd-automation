<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use OwenIt\Auditing\Contracts\Auditable;

class OrderEntry extends Model implements Auditable
{
    use HasFactory;

    use \OwenIt\Auditing\Auditable;

    protected $auditTimestamps = true;

    protected $primaryKey = 'OrderUID';
    public $timestamps = false;

    protected $table = 'tOrders';

    protected $fillable = [
    	'OrderNumber',
    	'OrderEntryDate',
    	'LoanNumer',
    	'ClientUID',
        'MockDocument',
        'SourceDocument',
        'ManualEdit',
    	'CompletedDate',
    	'CompletedByUserUID',
    	'StatusUID',
    	'CreatedByDateTime',
    	'ModifiedByDateTime'
    ];

    protected $auiditInclude = [
        'OrderNumber',
        'OrderEntryDate',
        'LoanNumer',
        'LoanTypeUID',
        'ClientUID',
        'LenderUID',
        'ClosingDate',
        'CompletedDate',
        'CompletedByUserUID',
        'StatusUID',
        'CreatedByDateTime',
        'ModifiedByDateTime'
    ];
}
