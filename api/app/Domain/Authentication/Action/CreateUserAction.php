<?php

namespace App\Domain\Authentication\Action;

use App\Domain\Authentication\DTO\RegisterDTO;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUserAction
{
    public function __invoke(RegisterDTO $dto): User
    {
        return User::create([
            'email' => $dto->email,
            'name' => $dto->name,
            'password' => Hash::make($dto->password),
        ]);
    }
}
