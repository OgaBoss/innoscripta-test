<?php

namespace App\Domain\News\Actions;

use App\Domain\News\DTO\NewsFeedFilterDTO;
use App\Domain\News\Resources\NewsCollection;
use App\Domain\Support\Helper\PaginatorHelper;
use App\Models\News;
use Illuminate\Contracts\Container\BindingResolutionException as BindingResolutionExceptionAlias;


class NewsFeedAction
{
    /**
     * @param NewsFeedFilterDTO $dto
     * @param int $limit
     * @return array
     * @throws BindingResolutionExceptionAlias
     */
    public function __invoke(NewsFeedFilterDTO $dto, int $limit = 10): array
    {
        $data = News::when($dto->keyword, fn ($query) => $query->whereSearch($dto->keyword))
            ->when($dto->date, fn ($query) => $query->wherePublishedAt($dto->date))
            ->when($dto->sourceId, fn ($query) => $query->whereSource($dto->sourceId))
            ->when($dto->categoryId, fn ($query) => $query->whereCategory($dto->categoryId))
            ->when($dto->authorId, fn ($query) => $query->whereAuthor($dto->authorId))
            ->paginate($limit);

        $collection = new NewsCollection($data);

        return $collection->response()->getData(true);
    }
}
