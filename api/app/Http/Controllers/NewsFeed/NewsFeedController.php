<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Actions\NewsFeedAction;
use App\Domain\News\DTO\NewsFeedFilterDTO;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsFeedController
{
    public function __invoke(Request $request, NewsFeedAction $action): JsonResponse
    {
        try {
            $dto = NewsFeedFilterDTO::from([
                'keyword' => $request->query->get('keyword'),
                'sourceId' => $request->query->get('source'),
                'authorId' => $request->query->get('author'),
                'categoryId' => $request->query->get('category'),
                'date' => $request->query->get('date'),
            ]);

            return response()->json(['data' => $action($dto, $request->query->get('limit') ?? 10), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
