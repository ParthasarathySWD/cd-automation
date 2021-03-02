<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderStatus;
use Illuminate\Support\Facades\DB;


class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
            [
                'StatusUID'=>1,
                'StatusName'=>'Order Initiated',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],  
            [
                'StatusUID'=>10,
                'StatusName'=>'Prelim CD OCR Inprogress',
                'StatusName'=>'Prelim CD OCR Inprogress',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
                
            [
                'StatusUID'=>20,
                'StatusName'=>'Prelim CD OCR Completed',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
                
            [
                'StatusUID'=>30,
                'StatusName'=>'Source Doc OCR Inprogress',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
                
            [
                'StatusUID'=>40,
                'StatusName'=>'Source Doc OCR Completed',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ]
        ];
            
        DB::table('mOrderStatus')->insert($data);


    }
}
