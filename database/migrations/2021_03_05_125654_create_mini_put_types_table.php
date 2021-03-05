<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMiniPutTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create ( 'mini_put_types', function (Blueprint $table) {
            $table->primary('InputTypeUID');
            $table->string('InputTypeName',500)->nullable();
            $table->longText('InputTypeContent')->nullable();
            $table->tinyInteger('Active')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mini_put_types');
    }
}
