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
     * @return object
     * @throws BindingResolutionExceptionAlias
     */
    public function __invoke(NewsFeedFilterDTO $dto, int $limit = 10): object
    {
        $data = News::query()
            ->when($dto->keyword, fn ($query) => $query->whereSearch($dto->keyword))
            ->when($dto->date, fn ($query) => $query->wherePublishedAt($dto->date))
            ->when($dto->sourceId, fn ($query) => $query->whereSource($dto->sourceId))
            ->when($dto->categoryId, fn ($query) => $query->whereCategory($dto->categoryId))
            ->when($dto->authorId, fn ($query) => $query->whereAuthor($dto->authorId))
            ->get();

        ray($data);

        return PaginatorHelper::paginate(collect(new NewsCollection($data)), $limit);
    }
}
