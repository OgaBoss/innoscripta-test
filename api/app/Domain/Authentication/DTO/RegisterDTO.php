<?php

namespace App\Domain\Authentication\DTO;

use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\Unique;
use Spatie\LaravelData\Data;
use Symfony\Contracts\Service\Attribute\Required;

class RegisterDTO extends Data
{
    #[Required]
    #[StringType]
    public string $name;

    #[Required]
    #[StringType]
    #[Unique('users')]
    public string $email;

    #[Required]
    #[StringType]
    public string $password;
}
