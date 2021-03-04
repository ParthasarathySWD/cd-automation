<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMFormFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mFormFields', function (Blueprint $table) {
            $table->id('FormFieldUID');
            $table->string('FormFieldName');
            $table->string('FormFieldHash');
            $table->integer('InputTypeUID');
            $table->string('FormFieldLabel');
            $table->integer('FormFieldLength');
            $table->tinyInteger('FormFieldRequire');
            $table->longText('FormFieldInstruction');
            $table->longText('FormFieldPlaceholder');
            $table->longText('FormGrouping');
            $table->tinyInteger('FormFieldPosition');
            $table->integer('Active')->default(1);
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
        Schema::dropIfExists('mFormFields');
    }
}
