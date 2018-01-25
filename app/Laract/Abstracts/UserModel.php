<?php

namespace App\Laract\Abstracts;

use App\Laract\Traits\HashIdTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Laract\Traits\HasResourceKeyTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
//use Spatie\Permission\Traits\HasRoles;

abstract class UserModel extends Authenticatable
{

    use Notifiable;
    use SoftDeletes;
    use HashIdTrait;
//    use HasRoles;
    use HasApiTokens;
    use HasResourceKeyTrait;

    protected $guard_name = 'api';
}
