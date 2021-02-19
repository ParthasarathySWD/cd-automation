<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $primaryKey = 'RoleUID';
    public $timestamps = false;

    protected $table = 'mRoles';
    protected $fillable = [
       'RoleName',
       'CreatedByDateTime',
       'ModifiedByDateTime'
    ];
}
