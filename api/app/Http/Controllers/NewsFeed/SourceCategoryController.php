<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Actions\FetchCategoryBySource;
use App\Domain\News\Resources\CategoryCollection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SourceCategoryController
{
    public function __invoke(Request $request, string $id, FetchCategoryBySource $action): JsonResponse
    {
        try {
            return response()->json(['data' => new CategoryCollection($action($id)), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
