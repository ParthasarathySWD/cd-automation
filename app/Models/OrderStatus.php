<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    use HasFactory;

    protected $primaryKey = 'StatusUID';
    public $timestamps = false;

    protected $table = 'mOrderStatus';

    protected $fillable = [
    	'StatusName',
    	'StatusColor',
    	'IconType',
    	'IconName',
    	'IconFileName',
    	'IconFilePath',
    	'Active',
    	'CreatedByUserUID',
    	'CreatedByDateTime',
    	'ModifiedByUserUID',
    	'ModifiedByDateTime'
    ];
}
