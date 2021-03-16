<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\mFormFields;
use Illuminate\Support\Facades\DB;
class CDfourthpageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data=[
            [
                'FormFieldName' =>'Assumption',
                'FormFieldHash' => bcrypt('Assumption'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'Assumption',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'AssumptionAvaliable',
                'FormFieldHash' => bcrypt('AssumptionAvaliable'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'AssumptionAvaliable',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'DemandFeature',
                'FormFieldHash' => bcrypt('DemandFeature'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'DemandFeature',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'DemandFeatureAvaliable',
                'FormFieldHash' => bcrypt('DemandFeatureAvaliable'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'DemandFeatureAvaliable',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'NegativeAmortization',
                'FormFieldHash' => bcrypt('NegativeAmortization'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'NegativeAmortization',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'NegativeAmortizationSecond',
                'FormFieldHash' => bcrypt('NegativeAmortizationSecond'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'NegativeAmortizationSecond',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'NegativeAmortizationThird',
                'FormFieldHash' => bcrypt('NegativeAmortizationThird'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'NegativeAmortizationThird',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'PartialPayments',
                'FormFieldHash' => bcrypt('PartialPayments'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'PartialPayments',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'PartialPaymentsSecond',
                'FormFieldHash' => bcrypt('PartialPaymentsSecond'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'PartialPaymentsSecond',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'PartialPaymentsThird',
                'FormFieldHash' => bcrypt('PartialPaymentsThird'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'PartialPaymentsThird',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowAccount',
                'FormFieldHash' => bcrypt('EscrowAccount'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'General',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowedPropertyCostsoverYear1',
                'FormFieldHash' => bcrypt('EscrowedPropertyCostsoverYear1'),
                'InputTypeUID' => '5',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'EscrowedPropertyCostsoverYear1',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'NonEscrowedPropertyCostsoverYear1',
                'FormFieldHash' => bcrypt('NonEscrowedPropertyCostsoverYear1'),
                'InputTypeUID' => '5',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'NonEscrowedPropertyCostsoverYear1',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'InitialEscrowPayment',
                'FormFieldHash' => bcrypt('InitialEscrowPayment'),
                'InputTypeUID' => '5',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'InitialEscrowPayment',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'MonthlyEscrowPayment',
                'FormFieldHash' => bcrypt('MonthlyEscrowPayment'),
                'InputTypeUID' => '5',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'MonthlyEscrowPayment',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowActive',
                'FormFieldHash' => bcrypt('EscrowActive'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'EscrowActive',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowActiveTwo',
                'FormFieldHash' => bcrypt('EscrowActiveTwo'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'EscrowActiveTwo',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowActiveThree',
                'FormFieldHash' => bcrypt('EscrowActiveThree'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'EscrowActiveThree',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'NoEscrowOne',
                'FormFieldHash' => bcrypt('NoEscrowOne'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'NoEscrowOne',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
            [
                'FormFieldName' =>'EscrowWaiverFee',
                'FormFieldHash' => bcrypt('EscrowWaiverFee'),
                'InputTypeUID' => '4',
                'FormFieldLabel' => 1,
                'FormFieldLength'=> 100,    
                'FormFieldRequire' => 1,
                'FormFieldPosition' => '1',
                'FormFieldInstruction' => 'EscrowWaiverFee',
                'FormFieldPlaceholder'=>'value',
                'FormGrouping'=>'2',
                'Active' => 1,
            ],
        ];
        DB::table('mFormFields')->insert($data);
    }
}
