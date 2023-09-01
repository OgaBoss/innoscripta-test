<?php

namespace App\Domain\News\Resources;

use App\Models\Author;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class AuthorResource extends JsonResource
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
        /* @var Author $this */
        return [
            'id'                    => $this->id,
            'name'                  => $this->name,
            'img_url'               => $this->img_url,
            'created_at'            => $this->created_at,
            'updated_at'            => $this->updated_at,
        ];
    }
}
