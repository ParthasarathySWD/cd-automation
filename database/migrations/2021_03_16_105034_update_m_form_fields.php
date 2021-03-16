<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMFormFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('mFormFields', function (Blueprint $table) {
            $table->string('FormFieldKeyword')->after('FormFieldLabel')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('mFormFields', function (Blueprint $table) {
            if (Schema::hasColumn('mFormFields', 'FormFieldKeyword')) {

                $table->dropColumn('FormFieldKeyword');
            }
        });
    }
}
