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
        $source = collect(['NewsAPI', 'OpenNews', 'NewsCred', 'The Guardian', 'New York Times', 'BBC News']);
        $source->each(function ($name) {
            Source::factory()->create([
                'name' => $name,
            ]);
        });
    }
}
