<?php

namespace Database\Seeders;

use App\Models\Source;
use Illuminate\Database\Seeder;

class SourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $source = collect(['NewsAPI', 'The Guardian', 'New York Times']);
        $source->each(function ($name) {
            Source::factory()->create([
                'name' => $name,
            ]);
        });
    }
}
