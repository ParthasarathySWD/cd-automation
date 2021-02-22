<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderEntryFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tOrdersDocuments', function (Blueprint $table) {
            $table->id('DocumentUID');
            $table->unsignedBigInteger('OrderUID');
            $table->foreign('OrderUID')->references('OrderUID')->on('tOrders');
            $table->string('DocumentName');
            $table->string('DocumentTypeUID');
            $table->string('FilePath');
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
        Schema::dropIfExists('tOrdersDocuments');
    }
}
