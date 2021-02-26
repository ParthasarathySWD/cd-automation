<?php

namespace Database\Factories;

use App\Models\OrderStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = OrderStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
        'StatusName' => $this->faker->name,
        'StatusColor' => $this->faker->hexcolor,
        'IconType' => 'Image',
        'IconName' => $this->faker->name,
        'IconFileName' => $this->faker->name,
        // 'IconFilePath' => $this->faker->file('c:/xampp', 'c:/xampp/htdocs'),
        'IconFilePath' => $this->faker->name,
        'Active' => 1,
        'CreatedByUserUID' => 1,
        'CreatedByDateTime' => $this->faker->dateTime(),
        'ModifiedByUserUID' => 1,
        'ModifiedByDateTime' => $this->faker->dateTime(),

        ];
    }
}
