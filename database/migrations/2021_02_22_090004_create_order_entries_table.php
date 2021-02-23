<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderEntriestable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tOrders', function (Blueprint $table) {
            $table->id('OrderUID');
            $table->string('OrderNumber');
            $table->dateTime('OrderEntryDate');
            $table->string('LoanNumer');
            $table->integer('LoanTypeUID');
            $table->integer('CustomerUID');
            $table->integer('LenderUID');
            $table->dateTime('ClosingDate');
            $table->dateTime('CompletedDate')->nullable();
            $table->integer('CompletedByUserUID')->nullable();
            $table->unsignedBigInteger('StatusUID');
            $table->foreign('StatusUID')->references('StatusUID')->on('mOrderStatus');
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
        Schema::dropIfExists('tOrders');
    }
}
