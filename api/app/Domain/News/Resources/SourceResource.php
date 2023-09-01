<?php

namespace App\Domain\News\Resources;

use App\Models\Source;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class SourceResource extends JsonResource
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
        /* @var Source $this */
        return [
            'id'                    => $this->id,
            'name'                  => $this->name,
            'news_count'            => $this->news_count,
            'created_at'            => $this->created_at,
            'updated_at'            => $this->updated_at,
        ];
    }
}
