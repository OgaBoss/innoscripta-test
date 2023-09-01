<?php

namespace App\Domain\News\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class NewsFeedBuilder extends Builder
{
    public function whereAuthor(string $authorId): self
    {
        return $this->where('author_id', $authorId);
    }

    public function whereCategory(string $categoryId): self
    {
        return $this->where('category_id', $categoryId);
    }

    public function whereSource(string $sourceId): self
    {
        return $this->where('source_id', $sourceId);
    }

    public function wherePublishedAt(string $date):self
    {
        return $this->where('date', '>=', $date);
    }

    public function whereSearch(string $keyword): self
    {
        return $this->where('title', 'LIKE', "%$keyword%");
    }
}
