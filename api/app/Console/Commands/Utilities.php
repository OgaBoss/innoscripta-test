<?php

namespace App\Console\Commands;

use App\Models\Author;
use App\Models\Category;
use App\Models\Source;

trait Utilities
{
    public function getAuthor(string $name): Author | null
    {
        return Author::where('name', $name)->first();
    }

    public function createAuthor(string $name, Source $source, string $img = null): Author
    {
        return Author::create([
            'name' => $name,
            'img_url' => $img
        ]);
    }

    public function syncSourceAuthor(Source $source, Author $author): void
    {
        // Sync Author with Source
        if (!$source->author()->where('author_id', $author->id)->exists()) {
            $source->author()->syncWithoutDetaching([$author->id]);
        }
    }

    public function getCategory(string $name): Category | null
    {
        return Category::where('name', $name)->first();
    }

    public function createCategory(string $name, Source $source, string $img = null): Category
    {
        return Category::create([
            'name' => $name,
            'img_url' => $img
        ]);
    }

    public function syncSourceCategory(Source $source, Category $category): void
    {
        // Sync Author with Source
        if (!$source->category()->where('category_id', $category->id)->exists()) {
            $source->category()->syncWithoutDetaching([$category->id]);
        }

    }

    public function getSource(string $name): Source
    {
        return Source::where('name', $name)->first();
    }
}
