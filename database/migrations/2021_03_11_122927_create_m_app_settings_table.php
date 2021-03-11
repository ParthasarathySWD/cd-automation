<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMAppSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mAppSettings', function (Blueprint $table) {
            $table->id('AppSetttingUID');
            $table->string('AppSettingName')->nullable();
            $table->string('AppSettingValue')->nullable();
            $table->integer('Active')->nullable();
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
        Schema::dropIfExists('mAppSettings');
    }
}
