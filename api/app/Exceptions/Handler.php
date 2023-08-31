<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e): JsonResponse | Response
    {
        if ($request->is('api/*'))
        {
            {
                if ($e instanceof ValidationException)
                {
                    $exception = $this->convertValidationExceptionToResponse($e, $request);

                    return response()->json([
                        'message' => $exception->getData()->message,
                        'status'  => 'error',
                        'data'    => [],
                    ], $exception->getStatusCode());
                }
            }
        }

        return parent::render($request, $e);
    }
}
