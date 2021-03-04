<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tOrderNotes', function (Blueprint $table) {
            $table->id('NotesUID');
            $table->unsignedBigInteger('OrderUID');
            $table->foreign('OrderUID')->references('OrderUID')->on('tOrders');
            $table->longText('Notes');
            $table->text('AttachedFiles');
            $table->integer('CreatedByUserUID')->nullable();
            $table->timestamp('CreatedByDateTime', $precision = 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tOrderNotes');
    }
}
