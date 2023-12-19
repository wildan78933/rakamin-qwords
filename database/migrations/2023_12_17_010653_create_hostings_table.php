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
        Schema::create('hostings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle');
            $table->decimal('original_price', 10, 3); // Harga asli tanpa diskon
            $table->decimal('discount_persen', 5, 2); // '5' adalah total digit dan '2' adalah digit di belakang koma
            $table->decimal('discounted_price', 10, 3); // Harga setelah diskon
            $table->string('disk_space'); // Ruang disk
            $table->string('core_cpu'); // Jumlah core CPU
            $table->string('bandwidth'); // Bandwidth
            $table->string('addon_parked_domain'); // Addon/parked domain (mungkin boolean)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hostings');
    }
};
