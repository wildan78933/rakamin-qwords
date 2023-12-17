<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class HostingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hostings')->insert([
            'title' => 'Unlimited Hosting',
            'subtitle' => 'Cocok untuk bisnis online',
            'original_price' => 109000,
            'discount_persen' => 10.00, // Ganti dengan nilai diskon dalam persentase
            'discounted_price' => 89900,
            'disk_space' => 3,
            'core_cpu' => 0.5,
            'bandwidth' => 'Unlimited',
            'addon_parked_domain' => 'No',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
