<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMTemplateFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mTemplateFields', function (Blueprint $table) {
            $table->unsignedBigInteger('TemplateUID');
            $table->foreign('TemplateUID')->references('TemplateUID')->on('mTemplates');
            $table->unsignedBigInteger('FormFieldUID');
            $table->foreign('FormFieldUID')->references('FormFieldUID')->on('mFormFields');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mTemplateFields');
    }
}
