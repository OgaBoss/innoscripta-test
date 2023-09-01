<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\News\Resources\SourceCollection;
use App\Models\Source;
use Illuminate\Http\JsonResponse;

class SourceController
{
    public function __invoke(): JsonResponse
    {
        try {
            return response()->json(['data' => new SourceCollection(Source::all()), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
