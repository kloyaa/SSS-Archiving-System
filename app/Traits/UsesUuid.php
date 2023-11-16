<?php

namespace App\Traits;

use Ramsey\Uuid\Uuid;

trait UsesUuid
{
    /**
     * Boot function from Laravel.
     */
    protected static function bootUsesUuid()
    {
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::uuid4()->toString();
        });
    }

    /**
     * Get the incrementing key type.
     *
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * Get the key type.
     *
     * @return string
     */
    public function getKeyType()
    {
        return 'string';
    }
}
