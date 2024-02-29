<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    public function division(): BelongsTo
    {
        return $this->belongsTo(Division::class);
    }

    public function segments(): HasMany
    {
        return $this->hasMany(Segment::class);
    }
}
