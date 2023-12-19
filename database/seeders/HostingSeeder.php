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
            [
                'title' => 'Value Cloud Hosting',
                'subtitle' => 'Cocok untuk pemula & 
                landing page',
                'original_price' => 24.500,
                'discount_persen' => 40.82,
                'discounted_price' => 14.500,
                'disk_space' => 3,
                'core_cpu' => 0.5,
                'bandwidth' => 'Unlimited',
                'addon_parked_domain' => 'No',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Unlimited Hosting',
                'subtitle' => 'Cocok untuk bisnis online',
                'original_price' => 109.000,
                'discount_persen' => 18.35,
                'discounted_price' => 89.000,
                'disk_space' => 'Unlimited',
                'core_cpu' => 1,
                'bandwidth' => 'Unlimited',
                'addon_parked_domain' => '5/5',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'High Performance',
                'subtitle' => 'Cocok untuk bisnis perusahaan',
                'original_price' => 90.000,
                'discount_persen' => 12.22,
                'discounted_price' => 79.000,
                'disk_space' => 3,
                'core_cpu' => 1,
                'bandwidth' => 'Unlimited',
                'addon_parked_domain' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Cloud VPS KVM SSD',
                'subtitle' => 'Cocok untuk UMKM',
                'original_price' => 135.000,
                'discount_persen' => 44.44,
                'discounted_price' => 75.000,
                'disk_space' => 25,
                'core_cpu' => 1,
                'bandwidth' => 'Unlimited',
                'addon_parked_domain' => 'Unlimited',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
        ]);
        
    }
}
