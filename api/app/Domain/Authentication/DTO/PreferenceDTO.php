<?php

namespace App\Domain\Authentication\DTO;


use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Symfony\Contracts\Service\Attribute\Required;

class PreferenceDTO extends Data
{
    #[StringType]
    public ?string $source;

    #[StringType]
    public ?string $category;

    #[StringType]
    public ?string $author;
}
