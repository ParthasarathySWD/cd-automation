<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderStatus;
use Illuminate\Support\Facades\DB;


class UserSeeder extends Seeder
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
                'UserName'=>'Partha',
                'FirstName'=>'Partha',
                'LastName'=>'M',
                'Email'=>'parthasarathyswd@gmail.com',
                'Password'=>bcrypt('123456'),
                'RoleUID'=>1,
                'ClientUID'=>1,
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'ModifiedByUserUID'=>1,
                'ModifiedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],  
            [
                'UserName'=>'Kavin',
                'FirstName'=>'Kavin',
                'LastName'=>'K',
                'Email'=>'kavin@gmail.com',
                'Password'=>bcrypt('123456'),
                'RoleUID'=>1,
                'ClientUID'=>1,
                'CreatedByUserUID'=>1,
                'CreatedByDateTime'=>date('Y-m-d H:i:s'),
                'ModifiedByUserUID'=>1,
                'ModifiedByDateTime'=>date('Y-m-d H:i:s'),
                'Active'=>1,
            ],
        ];
            
        DB::table('mUsers')->insert($data);


    }
}
