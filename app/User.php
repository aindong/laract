<?php

namespace App;

use App\Laract\Traits\AuthorizationTrait;
use App\Pluggables\Abstracts\Models\UserModel as AbstractUserModel;

class User extends AbstractUserModel
{
    use AuthorizationTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
