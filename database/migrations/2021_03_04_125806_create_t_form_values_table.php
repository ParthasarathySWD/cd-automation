<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTFormValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tFormValues', function (Blueprint $table) {
            $table->id('FormValueUID');            
            $table->integer('OrderUID');
            $table->unsignedBigInteger('FormFieldUID');
            $table->foreign('FormFieldUID')->references('FormFieldUID')->on('mFormFields');
            $table->string('FormValue');
            $table->integer('TemplateUID');
            $table->integer('Confidence');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tFormValues');
    }
}
