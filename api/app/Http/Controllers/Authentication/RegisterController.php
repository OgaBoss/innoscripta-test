<?php

namespace App\Http\Controllers\Authentication;

use App\Domain\Authentication\Action\CreateUserAction;
use App\Domain\Authentication\DTO\RegisterDTO;
use App\Domain\Authentication\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RegisterController
{
    public function __invoke(Request $request, RegisterDTO $dto, CreateUserAction $action): JsonResponse
    {
        try {
            $user = $action($dto);

            return response()->json(['data' => new UserResource($user), 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
