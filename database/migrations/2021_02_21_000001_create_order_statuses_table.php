<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mOrderStatus', function (Blueprint $table) {
            $table->id('StatusUID');
            $table->string('StatusName');
            $table->string('StatusColor');
            $table->enum('IconType', ['Image', 'FontAwesome', 'Glyph']);
            $table->string('IconName');
            $table->string('IconFileName')->nullable();
            $table->string('IconFilePath')->nullable();
            $table->integer('Active');
            $table->integer('CreatedByUserUID')->nullable();
            $table->timestamp('CreatedByDateTime', $precision = 0)->nullable();
            $table->integer('ModifiedByUserUID')->nullable();
            $table->timestamp('ModifiedByDateTime', $precision = 0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mOrderStatus');
    }
}
