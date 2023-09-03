<?php

namespace App\Domain\Authentication\Action;

use App\Domain\Authentication\DTO\PreferenceDTO;
use App\Models\User;
use App\Models\UserPreference;

class SetPreferenceAction
{
    public function __invoke(PreferenceDTO $dto, User $user): void
    {
        ray($user);
        $preference = $user->preference;

        $payload = [
            'author' => $dto->author,
            'category' => $dto->category,
            'source' => $dto->source
        ];

        if ($preference) {
            $preference->preferences = $payload;
            $preference->save();

        } else {
            UserPreference::create([
                'user_id' => $user->id,
                'preferences' => $payload
            ]);
        }
    }
}
