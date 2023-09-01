<?php

namespace App\Domain\Support\Helper;

use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;

class PaginatorHelper
{
    /**
     * @param Collection $results
     * @param int $showPerPage
     *
     * @return object|null
     *
     * @throws BindingResolutionException
     */
    public static function paginate(Collection $results, int $showPerPage = 10): object|null
    {
        $pageNumber = Paginator::resolveCurrentPage('page');

        $totalPageNumber = $results->count();

        return self::paginator($results->forPage($pageNumber, $showPerPage), $totalPageNumber, $showPerPage, $pageNumber, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
        ]);
    }

    /**
     * @param $items
     * @param $total
     * @param $perPage
     * @param $currentPage
     * @param $options
     *
     * @return object|null
     *
     * @throws BindingResolutionException
     */
    protected static function paginator($items, $total, $perPage, $currentPage, $options): object|null
    {
        return Container::getInstance()->makeWith(LengthAwarePaginator::class, compact(
            'items',
            'total',
            'perPage',
            'currentPage',
            'options'
        ));
    }
}
