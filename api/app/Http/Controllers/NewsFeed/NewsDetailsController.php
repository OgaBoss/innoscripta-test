<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Actions\FetchNewsAction;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class NewsDetailsController
{
    public function __invoke(Request $request, string $id, FetchNewsAction $action): JsonResponse
    {
        try {
            return response()->json(['data' => $action($id), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
