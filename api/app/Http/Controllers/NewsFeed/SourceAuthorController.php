<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Actions\FetchAuthorBySource;
use App\Domain\News\Resources\AuthorCollection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SourceAuthorController
{
    public function __invoke(Request $request, string $id, FetchAuthorBySource $action): JsonResponse
    {
        try {
            return response()->json(['data' => new AuthorCollection($action($id)), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
