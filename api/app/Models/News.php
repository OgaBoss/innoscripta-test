<?php

namespace App\Models;

use App\Domain\News\QueryBuilders\NewsFeedBuilder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = [];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function fromSource(): BelongsTo
    {
        return $this->belongsTo(Source::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    public function newEloquentBuilder($query): NewsFeedBuilder
    {
        return new NewsFeedBuilder($query);
    }
}
