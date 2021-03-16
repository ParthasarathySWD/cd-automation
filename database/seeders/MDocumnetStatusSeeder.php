<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MDocumnetStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Master Document Status Seeder
        $data = [
            [
                'StatusUID'=>1,
                'StatusName'=>'OCR Not Started',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1
            ],  
            [
                'StatusUID'=>2,
                'StatusName'=>'OCR Inprogress',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1
            ],
                
            [
                'StatusUID'=>3,
                'StatusName'=>'OCR Completed',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1
            ]
        ];
            
        DB::table('mDocumentStatus')->insert($data);
    }
}
