<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\mFormFields;
use Illuminate\Support\Facades\DB;

class CDfifthpageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=[
        //
        [
            'FormFieldName' =>'TotalofPayments',
            'FormFieldHash' => bcrypt('TotalofPayments'),
            'InputTypeUID' => '5',
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
            'FormFieldName' =>'FinanceCharge',
            'FormFieldHash' => bcrypt('FinanceCharge'),
            'InputTypeUID' => '5',
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
            'FormFieldName' =>'AmountFinanced',
            'FormFieldHash' => bcrypt('AmountFinanced'),
            'InputTypeUID' => '5',
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
            'FormFieldName' =>'AnnualPercentageRate',
            'FormFieldHash' => bcrypt('AnnualPercentageRate'),
            'InputTypeUID' => '5',
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
            'FormFieldName' =>'TotalInterestPercentage',
            'FormFieldHash' => bcrypt('TotalInterestPercentage'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LiabilityafterForeclosure',
            'FormFieldHash' => bcrypt('LiabilityafterForeclosure'),
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
            'FormFieldName' =>'LiabilityafterForeclosureSecond',
            'FormFieldHash' => bcrypt('LiabilityafterForeclosureSecond'),
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
            'FormFieldName' =>'LenderName',
            'FormFieldHash' => bcrypt('LenderName'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderName',
            'FormFieldHash' => bcrypt('LenderName'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerName',
            'FormFieldHash' => bcrypt('MortgageBrokerName'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerName',
            'FormFieldHash' => bcrypt('RealEstateBrokerName'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerNameTwo',
            'FormFieldHash' => bcrypt('RealEstateBrokerNameTwo'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentName',
            'FormFieldHash' => bcrypt('SettlementAgentName'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderAddress',
            'FormFieldHash' => bcrypt('LenderAddress'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerAddress',
            'FormFieldHash' => bcrypt('MortgageBrokerAddress'),
            'InputTypeUID' => '1',
            'FormFieldLabel' => 1,
            'FormFieldLength'=> 100,    
            'FormFieldRequire' => 1,
            'FormFieldPosition' => '1',
            'FormFieldInstruction' => 'General',
            'FormFieldPlaceholder'=>'value',
            'FormGrouping'=> '2',
            'Active' => 1,
        ],
        [
            'FormFieldName' =>'RealEstateBrokerAddress',
            'FormFieldHash' => bcrypt('RealEstateBrokerAddress'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementBrokerAddress',
            'FormFieldHash' => bcrypt('SettlementBrokerAddress'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderNMLSID ',
            'FormFieldHash' => bcrypt('LenderNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerNMLSID',
            'FormFieldHash' => bcrypt('MortgageBrokerNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerNMLSID',
            'FormFieldHash' => bcrypt('RealEstateBrokerNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondNMLSID',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentNMLSID',
            'FormFieldHash' => bcrypt('SettlementAgentNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderSTLicenseID',
            'FormFieldHash' => bcrypt('LenderSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerSTLicenseID',
            'FormFieldHash' => bcrypt('MortgageBrokerSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSTLicenseID',
            'FormFieldHash' => bcrypt('RealEstateBrokerSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondSTLicenseID',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentSTLicenseID',
            'FormFieldHash' => bcrypt('SettlementAgentSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderContact',
            'FormFieldHash' => bcrypt('LenderContact'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerContact',
            'FormFieldHash' => bcrypt('MortgageBrokerContact'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerContact',
            'FormFieldHash' => bcrypt('RealEstateBrokerContact'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondContact',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondContact'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentContact',
            'FormFieldHash' => bcrypt('SettlementAgentContact'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderContactNMLSID',
            'FormFieldHash' => bcrypt('LenderContactNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerContactNMLSID',
            'FormFieldHash' => bcrypt('MortgageBrokerContactNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerContactNMLSID',
            'FormFieldHash' => bcrypt('RealEstateBrokerContactNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondContactNMLSID',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondContactNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentContactNMLSID',
            'FormFieldHash' => bcrypt('SettlementAgentContactNMLSID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderContactSTLicenseID',
            'FormFieldHash' => bcrypt('LenderContactSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerContactSTLicenseID',
            'FormFieldHash' => bcrypt('MortgageBrokerContactSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerContactSTLicenseID',
            'FormFieldHash' => bcrypt('RealEstateBrokerContactSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondContactSTLicenseID',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondContactSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentContactSTLicenseID',
            'FormFieldHash' => bcrypt('SettlementAgentContactSTLicenseID'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderEmail',
            'FormFieldHash' => bcrypt('LenderEmail'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerEmail',
            'FormFieldHash' => bcrypt('MortgageBrokerEmail'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerEmail',
            'FormFieldHash' => bcrypt('RealEstateBrokerEmail'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondEmail',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondEmail'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentEmail',
            'FormFieldHash' => bcrypt('SettlementAgentEmail'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'LenderPhone',
            'FormFieldHash' => bcrypt('LenderPhone'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'MortgageBrokerPhone',
            'FormFieldHash' => bcrypt('MortgageBrokerPhone'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerPhone',
            'FormFieldHash' => bcrypt('RealEstateBrokerPhone'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'RealEstateBrokerSecondPhone',
            'FormFieldHash' => bcrypt('RealEstateBrokerSecondPhone'),
            'InputTypeUID' => '1',
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
            'FormFieldName' =>'SettlementAgentPhone',
            'FormFieldHash' => bcrypt('SettlementAgentPhone'),
            'InputTypeUID' => '1',
            'FormFieldLabel' => 1,
            'FormFieldLength'=> 100,    
            'FormFieldRequire' => 1,
            'FormFieldPosition' => '1',
            'FormFieldInstruction' => 'General',
            'FormFieldPlaceholder'=>'value',
            'FormGrouping'=>'2',
            'Active' => 1,
        ],
    ];
    DB::table('mFormFields')->insert($data);
    }
}
