<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mFormFields extends Model
{
    use HasFactory;
    protected $primaryKey = 'FormFieldUID';
    public $timestamps = false;

    protected $table = 'mFormFields';
    
    protected $fillable = [
        'FormFieldName',
        'FormFieldHash',
        'InputTypeUID',
        'FormFieldLabel',
        'FormFieldLength',
        'FormFieldRequire',
        'FormFieldInstruction',
        'FormFieldPlaceholder',
        'FormGrouping',
        'FormFieldPosition',
        'Active',
        'CreatedByUserUID',
        'CreatedDateTime',
        'ModifiedByUserUID',
        'ModifiedDateTime',
    ];
}
