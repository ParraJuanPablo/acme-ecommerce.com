<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    public function segment()
    {
        return $this->belongsTo(Segment::class);
    }
    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class)
            ->using(CartProduct::class)
            ->withPivot('product_count', 'product_price_cents');
    }
}
