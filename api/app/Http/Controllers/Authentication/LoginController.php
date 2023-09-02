<?php

namespace App\Http\Controllers\Authentication;



use App\Domain\Authentication\Action\LoginAction;
use App\Domain\Authentication\DTO\LoginDTO;
use App\Exceptions\LoginFailedException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController
{
    public function __invoke(Request $request, LoginDTO $dto, LoginAction $action): JsonResponse
    {
        try
        {
            $token = $action($dto);

            return response()->json(['data' => ['access_token' => $token], 'status' => 'success'], 200);
        }
        catch (LoginFailedException $exception)
        {
            return response()->json(['status' => 'error',
                'message'                        => $exception->getMessage(), ], 400);
        }
        catch (\Throwable $exception)
        {
            return response()->json(['status' => 'error',
                'message'                        => $exception->getMessage(), ], $exception->getCode());
        }
    }
}
