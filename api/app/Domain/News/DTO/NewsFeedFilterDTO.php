<?php

namespace App\Domain\News\DTO;

use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;

class NewsFeedFilterDTO extends Data
{
    #[StringType]
    public ?string $authorId;

    #[StringType]
    public ?string $sourceId;

    #[StringType]
    public ?string $categoryId;

    #[StringType]
    public ?string $date;

    #[StringType]
    public ?string $keyword;
}
