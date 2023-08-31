<?php

namespace App\Domain\Authentication\Action;

use App\Domain\Authentication\DTO\LoginDTO;
use App\Exceptions\LoginFailedException;

class LoginAction
{
    /**
     * @throws LoginFailedException
     */
    public function __invoke(LoginDTO $dto): string
    {
        $token = auth()->attempt($dto->toArray());

        if (!$token) {
            throw new LoginFailedException('Invalid credentials');
        }

        return $token;
    }
}
