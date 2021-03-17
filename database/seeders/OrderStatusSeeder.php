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
                'StatusName'=>'OCR Inprogress',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
                
            [
                'StatusUID'=>20,
                'StatusName'=>'OCR Completed',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
                
            [
                'StatusUID'=>30,
                'StatusName'=>'Order Completed',
                'StatusColor'=>'#d36632',
                'IconType'=>'FontAwesome',
                'IconName'=>'fa fa-tick',
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
        ];
            
        DB::table('mOrderStatus')->insert($data);


    }
}
