<?php

return [
    /*
    |--------------------------------------------------------------------------
    | HashId feature
    |--------------------------------------------------------------------------
    |
    | Toggle the hashid feature to hash the id of each entity
    |
    */
    'hash-id' => true,
    'requests' => [
        'allow-roles-to-access-all-routes'  => [
            'admin'
        ],
        'force-accept-header' => true
    ]
];