<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mAppSettings extends Model
{
    use HasFactory;
    protected $primaryKey = 'AppSetttingUID';
    public $timestamps = false;
    protected $table = 'mAppSettings';

    protected $fillable = [
        'AppSettingName',
        'AppSettingValue',
        'Active',
        'CreatedByUserUID',
        'CreatedDateTime',
        'ModifiedByUserUID',
        'ModifiedDateTime',
    ];
}
