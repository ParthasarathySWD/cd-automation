<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mTemplates extends Model
{
    use HasFactory;
    protected $primaryKey = 'TemplateUID';
    public $timestamps = false;

    protected $table = 'mTemplates';
    protected $fillable = [
        'TemplateName',
        'TemplateContent',
        'TemplateType',
        'TemplateFilePath',
        'TemplateDocPath',
        'Header',
        'Footer',
        'Body',
        'PageSize',
        'MarginTop',
        'MarginBottom',
        'MarginLeft',
        'MarginRight',
        'FirstMarginTop',
        'FirstMarginBottom',
        'FirstMarginRight',
        'FirstMarginLeft',
        'PartiesSignature',
        'Active',
        'CreatedByUserUID',
        'CreatedDateTime',
        'ModifiedByUserUID',
        'ModifiedDateTime',
    ];
}
