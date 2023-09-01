<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController
{
    public function __invoke(): JsonResponse
    {
        try {
            return response()->json(['data' => new CategoryCollection(Category::all()), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
