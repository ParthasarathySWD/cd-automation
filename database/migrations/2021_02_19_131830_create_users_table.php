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
            $table->string('LastName')->nullable();
            $table->string('PhoneNumber')->nullable();
            $table->string('Email');
            $table->string('UserName')->nullable();
            $table->string('Password');
            $table->bigInteger('RoleUID');   
            $table->integer('CreatedByUserUID')->nullable();
            $table->timestamp('CreatedByDateTime', $precision = 0)->nullable();
            $table->integer('ModifiedByUserUID')->nullable();
            $table->timestamp('ModifiedByDateTime', $precision = 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mUsers');
    }
}
