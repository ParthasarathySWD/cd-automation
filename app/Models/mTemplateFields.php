<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mTemplateFields extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'mTemplateFields';
    protected $fillable = [
        'TemplateUID',
        'TempFieldUID',
        'TempFieldName',
        'TempFieldHash',
        'InputTypeUID',
        'TempFieldLabel',
        'TempFieldLength',
        'TempFieldRequire',
        'TempFieldInstruction',
        'TempFieldPlaceholder',
        'TempGrouping',
        'TempFieldPosition',
        'Active',
        'CreatedByUserUID',
        'CreatedDateTime',
        'ModifiedByUserUID',
        'ModifiedDateTime',
    ];
}
