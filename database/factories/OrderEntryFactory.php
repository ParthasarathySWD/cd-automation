<?php

namespace Database\Factories;

use App\Models\OrderEntry;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class OrderEntryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = OrderEntry::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //

        'OrderNumber'=>$this->faker->name,
        'LoanNumer'=>$this->faker->name,
        'ClientUID'=>1,
        'CompletedDate'=>$this->faker->dateTime(),
        'CompletedByUserUID'=>1,
        'StatusUID'=>1,
        'OrderEntryDate'=>"2021-03-12 12:00:00",
        'ClosingDate'=>$this->faker->dateTime(),
        'LoanTypeUID'=>1,
        'LenderUID'=>1,
        ];
    }
}
