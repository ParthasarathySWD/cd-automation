<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTOrderReprocessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tOrderReprocess', function (Blueprint $table) {
            $table->id('ReprocessUID');
            $table->integer('OrderUID');
            $table->string('OrderNumber')->nullable();
            $table->tinyInteger('ReProcessCount')->nullable();
            $table->tinyInteger('ReProcessStatus')->nullable();
            $table->integer('CreatedByUserUID')->nullable();
            $table->timestamp('CreatedDateTime', $precision = 0)->nullable();
            $table->integer('ModifiedByUserUID')->nullable();
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
        Schema::dropIfExists('tOrderReprocess');
    }
}
