<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTOrderNotesFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tOrderNotesFiles', function (Blueprint $table) {
            $table->id('NotesFileUID');
            $table->unsignedBigInteger('NotesUID')->default(0);
            $table->foreign('NotesUID')->references('NotesUID')->on('tOrderNotes');
            $table->string('DocumentName');
            $table->string('FilePath');
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
        Schema::dropIfExists('tOrderNotesFiles');
    }
}
