<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mRoles', function (Blueprint $table) {
            $table->id('RoleUID');
            $table->String('RoleName');
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
        Schema::dropIfExists('mRoles');
    }
}
