<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Author
 *
 * @property string $id
 * @property string $name
 * @property string|null $img_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Author newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Author newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Author query()
 * @method static \Illuminate\Database\Eloquent\Builder|Author whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Author whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Author whereImgUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Author whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Author whereUpdatedAt($value)
 */
	class Author extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Category
 *
 * @property string $id
 * @property string $name
 * @property string|null $img_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereImgUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\News
 *
 * @property string $id
 * @property string $source_id
 * @property string|null $category_id
 * @property string|null $author_id
 * @property string|null $title
 * @property string|null $content
 * @property string|null $date
 * @property string|null $url
 * @property string|null $img_url
 * @property string|null $source
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Author|null $author
 * @property-read \App\Models\Category|null $category
 * @property-read \App\Models\Source|null $fromSource
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News newModelQuery()
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News newQuery()
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News query()
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereAuthor(string $authorId)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereAuthorId($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereCategory(string $categoryId)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereCategoryId($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereContent($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereCreatedAt($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereDate($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereDescription($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereId($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereImgUrl($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News wherePublishedAt(string $date)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereSearch(string $keyword)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereSource($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereSourceId($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereTitle($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereUpdatedAt($value)
 * @method static \App\Domain\News\QueryBuilders\NewsFeedBuilder|News whereUrl($value)
 */
	class News extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Source
 *
 * @property string $id
 * @property string $name
 * @property-read int|null $news_count
 * @property string|null $last_fetched_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Author> $author
 * @property-read int|null $author_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $category
 * @property-read int|null $category_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\News> $news
 * @method static \Database\Factories\SourceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Source newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Source newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Source query()
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereLastFetchedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereNewsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Source whereUpdatedAt($value)
 */
	class Source extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property string $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \App\Models\UserPreference|null $preference
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent implements \Tymon\JWTAuth\Contracts\JWTSubject {}
}

namespace App\Models{
/**
 * App\Models\UserPreference
 *
 * @property string $id
 * @property string $user_id
 * @property \Illuminate\Database\Eloquent\Casts\AsArrayObject|null $preferences
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference wherePreferences($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserPreference whereUserId($value)
 */
	class UserPreference extends \Eloquent {}
}

