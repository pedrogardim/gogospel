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
        Schema::table('users', function (Blueprint $table) {
            $table->text('bio')->nullable();
            $table->json('images')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->json('interests')->nullable();
            $table->string('ministry_type')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('bio');
            $table->dropColumn('images');
            $table->dropColumn('is_verified');
            $table->dropColumn('interests');
            $table->dropColumn('ministry_type');
        });
    }
};
