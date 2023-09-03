<?php

namespace App\Domain\News\Resources;

use App\Models\News;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class NewsResource extends JsonResource
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
        /* @var News $this */
        return [
            'id'                    => $this->id,
            'source'                => new SourceResource($this->fromSource),
            'category'              => new CategoryResource($this->category),
            'author'                => new AuthorResource($this->author),
            'title'                 => $this->title,
            'content'               => $this->content,
            'date'                  => $this->date,
            'url'                   => $this->url,
            'img_url'               => $this->img_url,
            'news_source'           => $this->source,
            'description'           => $this->description,
            'created_at'            => $this->created_at,
            'updated_at'            => $this->updated_at,
        ];
    }
}
