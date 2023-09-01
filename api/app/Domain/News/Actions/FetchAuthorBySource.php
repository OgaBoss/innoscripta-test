<?php

namespace App\Domain\News\Actions;

use App\Models\Source;
use Tymon\JWTAuth\Claims\Collection;

class FetchAuthorBySource
{
    public function __invoke(string $id): Collection
    {
        return Source::find($id)->author;
    }
}
