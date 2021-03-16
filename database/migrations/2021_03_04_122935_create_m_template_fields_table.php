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
            $table->string('TempFieldName');
            $table->string('TempFieldHash');
            $table->integer('InputTypeUID');
            $table->string('TempFieldLabel');
            $table->integer('TempFieldLength');
            $table->tinyInteger('TempFieldRequire');
            $table->longText('TempFieldInstruction');
            $table->longText('TempFieldPlaceholder');
            $table->longText('TempGrouping');
            $table->tinyInteger('TempFieldPosition');
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
        Schema::dropIfExists('mTemplateFields');
    }
}
