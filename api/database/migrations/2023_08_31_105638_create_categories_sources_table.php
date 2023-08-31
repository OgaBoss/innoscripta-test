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
        Schema::create('categories_sources', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('source_id');
            $table->uuid('category_id');
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('sources');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories_sources');
    }
};
