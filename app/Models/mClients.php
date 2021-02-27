<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mClients extends Model
{
    use HasFactory;
    // use \OwenIt\Auditing\Auditable;

    // const CREATED_AT = 'CreatedDateTime';
    // const UPDATED_AT = 'ModifiedDateTime';

    protected $auditTimestamps = true;
    public $timestamps = false;

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
    	'CreatedByDateTime',
    	'ModifiedByDateTime'

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
    	'CreatedByDateTime',
    	'ModifiedByDateTime'

    ];

}
