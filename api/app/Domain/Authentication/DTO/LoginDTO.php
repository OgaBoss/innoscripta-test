<?php

namespace App\Domain\Authentication\DTO;

use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Symfony\Contracts\Service\Attribute\Required;

class LoginDTO extends  Data
{
    #[Required]
    #[StringType]
    public string $email;

    #[Required]
    #[StringType]
    public string $password;
}
