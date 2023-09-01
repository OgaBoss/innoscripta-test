<?php

namespace App\Http\Controllers\NewsFeed;

use App\Domain\Authentication\Resources\UserResource;
use App\Domain\News\Resources\AuthorCollection;
use App\Models\Author;
use Illuminate\Http\JsonResponse;

class AuthorController
{
    public function __invoke(): JsonResponse
    {
        try {
            return response()->json(['data' => new AuthorCollection(Author::all()), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
