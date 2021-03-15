<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use OwenIt\Auditing\Contracts\Auditable;
class User extends Model implements Auditable, \Illuminate\Contracts\Auth\Authenticatable
{
  use \Illuminate\Auth\Authenticatable;
  use HasApiTokens, HasFactory;
  use \OwenIt\Auditing\Auditable;
  
  protected $auditTimestamps = true;
  protected $primaryKey = 'UserUID';
  public $timestamps = false;
  protected $table = 'mUsers';

  protected $fillable = [
    'FirstName',
    'LastName',
    'PhoneNumber',
    'Email',
    'UserName',
    'Password',
    'RoleUID',
    'ClientUID',
    'Active',
    'CreatedByUserUID',
    'CreatedByDateTime',
    'ModifiedByUserUID',
    'ModifiedByDateTime'
  ];
  protected $auiditInclude = [
    'FirstName',
    'LastName',
    'PhoneNumber',
    'Email',
    'UserName',
    'Password',
    'RoleUID',
    'CreatedByUserUID',
    'CreatedByDateTime',
    'ModifiedByUserUID',
    'ModifiedByDateTime'
  ];

    public function getAuthPassword()
    {
      return $this->Password;
    }

    //     /**
    //  * Get the login username to be used by the controller.
    //  *
    //  * @return string
    //  */
    public function username()
    {
        return 'Email';
    }
}