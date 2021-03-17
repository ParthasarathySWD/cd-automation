<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class mDocumentType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'DocumentTypeName' => 'Prelim',
                'CreatedByUserUID' => 1,
                'CreatedByDateTime' => date('Y-m-d H:i:s'),
            ],
            [
                'DocumentTypeName' => 'Title Commitment & Closing',
                'CreatedByUserUID' => 1,
                'CreatedByDateTime' => date('Y-m-d H:i:s'),
            ],
            [
                'DocumentTypeName' => 'Mortgage',
                'CreatedByUserUID' => 1,
                'CreatedByDateTime' => date('Y-m-d H:i:s'),
            ],
            [
                'DocumentTypeName' => 'Tax Cert',
                'CreatedByUserUID' => 1,
                'CreatedByDateTime' => date('Y-m-d H:i:s'),
            ],
            [
                'DocumentTypeName' => 'Pay Off',
                'CreatedByUserUID' => 1,
                'CreatedByDateTime' => date('Y-m-d H:i:s'),
            ]
        ];
        DB::table('mDocumentType')->insert($data);
    }
}
