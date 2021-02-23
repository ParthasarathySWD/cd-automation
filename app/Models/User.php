<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class User extends Model
{
    use \Illuminate\Auth\Authenticatable;
    use HasApiTokens, HasFactory;

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
       'CreatedByDateTime',
       'ModifiedByDateTime'
    ];
}
