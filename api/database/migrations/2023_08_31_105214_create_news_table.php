<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('source_id');
            $table->uuid('category_id')->nullable();
            $table->uuid('author_id')->nullable();
            $table->text('title')->nullable();
            $table->text('content')->nullable();
            $table->string('date')->nullable();
            $table->text('url')->nullable();
            $table->text('img_url')->nullable();
            $table->string('source')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('sources');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('author_id')->references('id')->on('authors');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
