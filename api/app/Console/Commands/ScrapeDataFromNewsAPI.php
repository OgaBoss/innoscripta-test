<?php

namespace App\Console\Commands;

use App\Models\News;
use App\Models\Source;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapeDataFromNewsAPI extends Command
{
    use Utilities;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrape-data-from-news-api';

    protected string $source = 'NewsAPI';

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
        $apiKey = config('news.news_api_key');
        $source = $this->getSource($this->source);

        collect($this->category)->each(function ($item) use($source, $apiKey) {
            // Make Request to fetch articles
            $request = Http::get("https://newsapi.org/v2/everything?q={$item}&apiKey={$apiKey}&pageSize=20");

            // Parse through all articles
            // Create a News model for each article
            $request->collect('articles')->each(function ($article, int $index) use ($source, $item) {

                // Handle Category
                $category = $this->getCategory($item);
                if (!$category) {
                    $category = $this->createCategory($item, $source);
                }

                $this->syncSourceCategory($source, $category);

                // Handle Author
                $author = $article['author'] ? $this->getAuthor($article['author']) : null;
                if ($article['author'] && !$author) {
                    $author = $this->createAuthor($article['author'], $source);
                }

                if ($author) {
                    $this->syncSourceAuthor($source, $author);
                }


                // Transform Articles to News model
                $news = [
                    'category_id' => $category->id,
                    'author_id' => $author?->id,
                    'source_id' => $source?->id,
                    'title' => $article['title'],
                    'content' => $article['content'],
                    'description' => $article['description'],
                    'date' => $article['publishedAt'],
                    'url' => $article['url'],
                    'img_url' => $article['urlToImage'],
                    'source' => $article['source']['name']
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
    }
}
