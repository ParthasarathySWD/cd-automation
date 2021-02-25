<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mClients extends Model
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'last_update';

    protected $auditTimestamps = true;

    protected $primaryKey = 'ClientUID';
    
    protected $table = 'mClients';
    protected $fillable = [
        'ClientNumber',
        'ClientName',
        'Phone',
        'Email',
        'WebSite',
        'AddressLine1',
        'CityName',
        'CountyName',
        'StateName',
        'Notes',
    ];

    protected $auiditInclude = [
        'ClientNumber',
        'ClientName',
        'Phone',
        'Email',
        'WebSite',
        'AddressLine1',
        'CityName',
        'CountyName',
        'StateName',
        'Notes',
    ];

}
