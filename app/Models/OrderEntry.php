<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderEntry extends Model
{
    use HasFactory;
    protected $primaryKey = 'OrderUID';
    public $timestamps = false;

    protected $table = 'tOrders';

    protected $fillable = [
    	'OrderNumber',
    	'OrderEntryDate',
    	'LoanNumer',
    	'LoanTypeUID',
    	'CustomerUID',
    	'LenderUID',
    	'ClosingDate',
    	'CompletedDate',
    	'CompletedByUserUID',
    	'Status',
    	'CreatedByDateTime',
    	'ModifiedByDateTime'
    ];
}
