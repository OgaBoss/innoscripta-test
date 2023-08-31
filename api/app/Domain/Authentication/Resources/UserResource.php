<?php

namespace App\Domain\Authentication\Resources;

use App\Models\Author;
use App\Models\Category;
use App\Models\Source;
use App\Models\User;
use App\Models\UserPreference;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     *
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray(Request $request): array | Arrayable | JsonSerializable
    {
        /* @var User $this */
        return [
            'id'                    => $this->id,
            'name'                  => $this->name,
            'email'                 => $this->email,
            'created_at'            => $this->created_at,
            'updated_at'            => $this->updated_at,
            'preferences'           => $this->transformPreferences($this->preference)
        ];
    }

    private function transformPreferences(UserPreference | null $preference): array | null
    {
        if ($preference) {
            $response = [];

            if($preference->preferences['author']) {
                $response['author'] = Author::find($preference->preferences['author']);
            }

            if($preference->preferences['source']) {
                $response['source'] = Source::find($preference->preferences['source']);
            }

            if($preference->preferences['category']) {
                $response['category'] = Category::find($preference->preferences['category']);
            }

            return $response;
        }

        return null;
    }
}
