<?php

namespace App\Http\Controllers\Authentication;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Domain\Authentication\DTO\PreferenceDTO;
use App\Domain\Authentication\Action\SetPreferenceAction;

class SetPreferenceController
{
    public function __invoke(Request $request, PreferenceDTO $dto, SetPreferenceAction $action): JsonResponse
    {
        try {
            $action($dto, request()->user());

            return response()->json(['data' => [], 'status' => 'success'], 201);
        } catch (\Throwable $exception) {

            return response()->json(['data' => [], 'status' => 'error', 'message' => $exception->getMessage()], 500);
        }
    }
}
