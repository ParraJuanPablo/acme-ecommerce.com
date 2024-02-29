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
        Schema::create('products', function (Blueprint $table) {
            $table->id()->from(10000);
            $table->string('name');
            $table->foreignId('segment_id');
            $table->text('description');
            $table->unsignedInteger('price_cents');
            $table->integer('cost_cents')->nullable();
            $table->boolean('is_available')->default(false);
            $table->json('image_paths');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
