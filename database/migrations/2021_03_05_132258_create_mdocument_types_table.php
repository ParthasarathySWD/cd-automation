<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMdocumentTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mDocumentType', function (Blueprint $table) {
            $table->id('DocumentTypeUID');
            $table->string('DocumentTypeName');
            $table->integer('IsFinal')->default(0);
            $table->integer('CreatedByUserUID')->nullable();
            $table->timestamp('CreatedByDateTime', $precision = 0)->nullable();
            $table->integer('ModifiedUserUID')->nullable();
            $table->timestamp('ModifiedDateTime')->nullable();
            $table->tinyInteger('Active')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mDocumentType');
    }
}
