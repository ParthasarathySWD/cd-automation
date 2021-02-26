<?php

namespace Database\Factories;

use App\Models\mClients;
use Illuminate\Database\Eloquent\Factories\Factory;

class mClientsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = mClients::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $this->faker->addProvider(new Faker\Provider\en_US\Person($this->faker));
        // $this->faker->addProvider(new Faker\Provider\en_US\Address($this->faker));
        // $this->faker->addProvider(new Faker\Provider\en_US\PhoneNumber($this->faker));
        // $this->faker->addProvider(new Faker\Provider\en_US\Company($this->faker));
        // $this->faker->addProvider(new Faker\Provider\Lorem($this->faker));
        // $this->faker->addProvider(new Faker\Provider\Internet($faker));
        return [
            //
            'ClientNumber'=> $this->faker->randomNumber(5),
            'ClientName'=> $this->faker->name,
            'Phone'=> $this->faker->randomNumber(5),
            'Email'=> $this->faker->safeEmail,
            'WebSite'=> $this->faker->url,
            'AddressLine1'=> $this->faker->streetAddress,
            'CityName'=> $this->faker->city,
            'CountyName'=> $this->faker->city,
            'StateName'=> $this->faker->state,
            'Notes'=> $this->faker->paragraph
        ];
    }
}
