<?php

namespace App\Console\Commands;

use App\Models\News;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapeDataFromTheGuardian extends Command
{
    use Utilities;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrape-data-from-the-guardian';

    protected string $source = 'The Guardian';

    protected string $author = 'The Guardian';

    protected array $category = ['Technology', 'Bitcoin', 'Military', 'Religion', 'Movies'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
       try {
           $apiKey = config('news.the_guardian_api_key');
           $source = $this->getSource($this->source);

           collect($this->category)->each(function ($item) use($source, $apiKey) {
               $request = Http::get("https://content.guardianapis.com/search?q={$item}&api-key={$apiKey}&page-size=20");

               // Parse through all articles
               // Create a News model for each article
               $request->collect('response.results')->each(function ($article, int $index) use ($source, $item) {

                   // Handle Category
                   $category = $this->getCategory($item);
                   if (!$category) {
                       $category = $this->createCategory($item, $source);
                   }
                   // Sync category
                   $this->syncSourceCategory($source, $category);

                   // Handle Author
                   $author = $this->getAuthor($this->author);
                   if (!$author) {
                       $author = $this->createAuthor($this->author, $source);
                   }

                   if ($author) {
                       $this->syncSourceAuthor($source, $author);
                   }

                   // Transform Articles to News model
                   $news = [
                       'category_id' => $category->id,
                       'author_id' => $author?->id,
                       'source_id' => $source?->id,
                       'title' => $article['webTitle'],
                       'content' => $article['webTitle'],
                       'description' => $article['webTitle'],
                       'date' => $article['webPublicationDate'],
                       'url' => $article['webUrl'],
                       'img_url' => null,
                       'source' => null
                   ];

                   News::create($news);

                   // Update News Count for the source
                   $source->news_count += 1;
                   $source->save();

                   $this->info("Imported {$index}");
                   $this->newLine();
               });
           });

           $this->info('Command is Done');
       } catch (\Throwable $exception) {
           $this->error($exception->getMessage());
       }
    }
}
