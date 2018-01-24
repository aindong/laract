<?php

namespace App\Laract\Traits;

use Illuminate\Support\Facades\Auth;

trait AuthorizationTrait
{
    /**
     * @return User|\Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function getUser()
    {
        return Auth::user();
    }

    /**
     * @return  mixed
     */
    public function hasAdminRole()
    {
        return $this->hasRole('admin');
    }

    /**
     * Return the "highest" role of a user (0 if the user does not have any role)
     *
     * @return int
     */
    public function getRoleLevel()
    {
        return ($role = $this->roles()->orderBy('level', 'DESC')->first()) ? $role->level : 0;
    }
}