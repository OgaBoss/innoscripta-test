<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Source extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = [];

    public function news(): HasMany
    {
        return $this->hasMany(News::class);
    }

    public function author(): BelongsToMany
    {
        return $this->belongsToMany(Author::class, 'authors_sources');
    }

    public function category(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'categories_sources');
    }
}
