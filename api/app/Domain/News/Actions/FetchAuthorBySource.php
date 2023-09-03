<?php

namespace App\Domain\News\Actions;

use App\Models\Source;
use Illuminate\Support\Collection;;

class FetchAuthorBySource
{
    public function __invoke(string $id): Collection
    {
        return Source::find($id)->author;
    }
}
