<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\mFormFields;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class mFormFieldsSeeder extends Seeder
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
                'FormFieldUID' => 1,
                'FormFieldName' => 'Borrower',
                'FormFieldHash' => hash::make(1),
                'InputTypeUID' => 1,
                'FormFieldLabel' => 'Borrower',
                'FormFieldLength' => 50,
                'FormFieldRequire' => 1,
                'FormFieldInstruction' => '',
                'FormFieldPlaceholder' => 'Borrower',
                'FormGrouping' => '',
                'FormFieldPosition' => '1',
                'Active' => 1,
                'CreatedByUserUID' => NULL,
                'CreatedDateTime' => NULL,
                'ModifiedByUserUID' => NULL,
                'ModifiedDateTime' => NULL,
            ],
            [
                'FormFieldUID' => 2,
                'FormFieldName' => 'Lender',
                'FormFieldHash' => hash::make(2),
                'InputTypeUID' => 1,
                'FormFieldLabel' => 'Lender',
                'FormFieldLength' => 50,
                'FormFieldRequire' => 1,
                'FormFieldInstruction' => '',
                'FormFieldPlaceholder' => 'Lender',
                'FormGrouping' => '',
                'FormFieldPosition' => '1',
                'Active' => 1,
                'CreatedByUserUID' => NULL,
                'CreatedDateTime' => NULL,
                'ModifiedByUserUID' => NULL,
                'ModifiedDateTime' => NULL,
            ],
        ];

        DB::table('mFormFields')->insert($data);
    }
}
