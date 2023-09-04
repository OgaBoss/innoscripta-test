<?php

namespace App\Domain\News\Actions;

use App\Domain\News\Resources\NewsResource;
use App\Models\News;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FetchNewsAction
{
    public function __invoke(string $id): NewsResource
    {
        $news = News::find($id);

        if (!$news) {
            throw new ModelNotFoundException('News not found');
        }

        return new NewsResource($news);
    }
}
