<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Note extends Model
{
    use \Illuminate\Auth\Authenticatable;
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'UserUID',
        'Notes',
        'CreatedByUserUID',
        'CreatedByDateTime',
        'ModifiedByUserUID',
        'ModifiedByDateTime'
    ];
}
