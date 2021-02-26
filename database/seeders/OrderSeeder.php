<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderEntry;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        OrderEntry::factory()
            ->count(50)
            ->create();
    }
}
