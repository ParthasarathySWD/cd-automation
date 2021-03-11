<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tOrderReprocess extends Model
{
    use HasFactory;

    protected $primaryKey = 'ReprocessUID';
    public $timestamps = false;
    protected $table = 'tOrderReprocess';

    protected $fillable = [
        'OrderUID',
        'OrderNumber',
        'ReProcessCount',
        'ReProcessStatus',
        'CreatedByUserUID',
        'CreatedDateTime',
        'ModifiedByUserUID',
        'ModifiedDateTime',
    ];
}
