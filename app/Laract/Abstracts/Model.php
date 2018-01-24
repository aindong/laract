<?php

namespace App\Pluggables\Abstracts\Models;

use App\Laract\Traits\HashIdTrait;
use App\Laract\Traits\HasResourceKeyTrait;
use Illuminate\Database\Eloquent\Model as LaravelEloquentModel;

abstract class Model extends LaravelEloquentModel
{
    use HashIdTrait;
    use HasResourceKeyTrait;
}
