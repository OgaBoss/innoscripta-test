<?php

namespace App\Domain\Authentication\Action;

use App\Domain\Authentication\DTO\LoginDTO;
use App\Domain\Authentication\Resources\UserResource;
use App\Exceptions\LoginFailedException;

class LoginAction
{
    /**
     * @throws LoginFailedException
     */
    public function __invoke(LoginDTO $dto): array
    {
        $token = auth()->attempt($dto->toArray());

        if (!$token) {
            throw new LoginFailedException('Invalid credentials');
        }

        return ['user' => new UserResource(auth()->user()), 'token' => $token];
    }
}
