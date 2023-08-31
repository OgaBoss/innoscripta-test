<?php

namespace App\Http\Controllers\Authentication;

use App\Domain\Authentication\Resources\UserResource;
use Illuminate\Http\JsonResponse;

class MeController
{
    public function __invoke(): JsonResponse
    {
        try {
            return response()->json(['data' => new UserResource(request()->user()), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
