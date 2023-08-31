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
            $table->uuid('category_id');
            $table->uuid('author_id');
            $table->string('title');
            $table->text('content');
            $table->string('date');
            $table->string('url');
            $table->string('img_url');
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
