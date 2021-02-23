<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderSetting extends Model
{
    use HasFactory;

    protected $primaryKey = 'OrderSetttingUID';
    public $timestamps = false;

    protected $table = 'mOrderSettings';

    protected $fillable = [
    	'OrderSettingName',
    	'OrderSettingValue',
    	'Active',
    	'CreatedByUserUID',
    	'CreatedByDateTime',
    	'ModifiedByUserUID',
    	'ModifiedByDateTime'
    ];
}
