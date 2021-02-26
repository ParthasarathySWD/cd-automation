<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mClients', function (Blueprint $table) {
            $table->id('ClientUID');
            $table->string('ClientNumber');
            $table->string('ClientName');
            $table->string('Phone')->nullable();
            $table->string('Email')->nullable();
            $table->string('WebSite')->nullable();
            $table->string('AddressLine1')->nullable();
            $table->string('CityName')->nullable();
            $table->string('CountyName')->nullable();
            $table->string('StateName')->nullable();
            $table->longtext('Notes')->nullable();
            
            $table->timestamp('CreatedDateTime', $precision = 0)->nullable();
            $table->timestamp('ModifiedDateTime', $precision = 0)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mClients');
    }
}
