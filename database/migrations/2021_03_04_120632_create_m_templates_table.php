<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mTemplates', function (Blueprint $table) {
            $table->id('TemplateUID');            
            $table->longText('TemplateName');
            $table->longText('TemplateContent');
            $table->enum('TemplateType', ['Pdf', 'Doc', 'Html'])->default('Pdf');
            $table->longText('TemplateFilePath');
            $table->longText('TemplateDocPath');
            $table->longText('Header');
            $table->longText('Footer');
            $table->longText('Body');
            $table->longText('PageSize');
            $table->decimal('MarginTop', $precision = 10, $scale = 3);
            $table->decimal('MarginBottom', $precision = 10, $scale = 3);
            $table->decimal('MarginLeft', $precision = 10, $scale = 3);
            $table->decimal('MarginRight', $precision = 10, $scale = 3);
            $table->decimal('FirstMarginTop', $precision = 10, $scale = 3);
            $table->decimal('FirstMarginBottom', $precision = 10, $scale = 3);
            $table->decimal('FirstMarginRight', $precision = 10, $scale = 3);
            $table->decimal('FirstMarginLeft', $precision = 10, $scale = 3);
            $table->decimal('PartiesSignature', $precision = 10, $scale = 3);
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
        Schema::dropIfExists('mTemplates');
    }
}
