<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mUsers', function (Blueprint $table) {
            $table->id('UserUID');
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('PhoneNumber');
            $table->string('Email');
            $table->string('UserName');
            $table->string('Password');
            $table->bigInteger('RoleUID');        
            $table->dateTime('CreatedByDateTime', $precision = 0)->nullable();
            $table->dateTime('ModifiedByDateTime', $precision = 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
