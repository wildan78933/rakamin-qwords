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
        Schema::create('hosting_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama rencana hosting (contoh: Unlimited Hosting)
            $table->text('description')->nullable(); // Deskripsi (contoh: Cocok untuk bisnis online)
            $table->decimal('original_price', 10, 2); // Harga asli (contoh: Rp 109.000)
            $table->decimal('discounted_price', 10, 2); // Harga setelah diskon (contoh: Rp 89.900)
            $table->decimal('discount_percentage', 5, 2); // Persentase diskon (contoh: 10%)
            $table->string('disk'); // Kapasitas Disk (contoh: 3 GB)
            $table->decimal('core_cpu', 3, 1); // Core CPU (contoh: 0.5 Core)
            $table->string('bandwidth'); // Bandwidth (contoh: Unlimited)
            $table->boolean('addon_domain')->default(false); // Addon / Parked domain (contoh: No)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hosting_plans');
    }
};
