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
        Schema::create('authors_sources', function (Blueprint $table) {
            $table->uuid('source_id');
            $table->uuid('author_id');
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('sources');
            $table->foreign('author_id')->references('id')->on('authors');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('authors_sources');
    }
};
