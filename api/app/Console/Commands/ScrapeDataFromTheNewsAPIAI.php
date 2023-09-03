<?php

namespace App\Console\Commands;

use App\Models\News;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ScrapeDataFromTheNewsAPIAI extends Command
{
    use Utilities;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrape-data-from-api-ai';

    protected string $source = 'New York Times';

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
            $apiKey = config('news.news_api_ai_key');
            $source = $this->getSource($this->source);

            collect($this->category)->each(function ($item) use($source, $apiKey) {
                $request = Http::get("http://eventregistry.org/api/v1/article/getArticles", [
                    'apiKey' => $apiKey,
                    "action" => "getArticles",
                    "keyword" => $item,
                    "articlesCount" => 20,
                    "articlesArticleBodyLen" => -1,
                ]);

                // Parse through all articles
                // Create a News model for each article
                $request->collect('articles.results')->each(function ($article, int $index) use ($source, $item) {

                    // Handle Category
                    $category = $this->getCategory($item);
                    if (!$category) {
                        $category = $this->createCategory($item, $source);
                    }

                    $this->syncSourceCategory($source, $category);

                    // Handle Authors
                    $author = count($article['authors']) > 0 ? $this->getAuthor($article['authors'][0]['name']) : null;
                    if (count($article['authors']) > 0 && !$author) {
                        $author = $this->createAuthor($article['authors'][0]['name'], $source);
                    }

                    if ($author) {
                        $this->syncSourceAuthor($source, $author);
                    }

                    // Transform Articles to News model
                    $news = [
                        'category_id' => $category?->id,
                        'author_id' => $author?->id,
                        'source_id' => $source?->id,
                        'title' => $article['title'],
                        'content' => $article['body'],
                        'description' => $article['title'],
                        'date' => $article['dateTimePub'],
                        'url' => $article['url'],
                        'img_url' => $article['image'],
                        'source' => count($article['source']) > 0 ? $article['source']['title'] : null
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
