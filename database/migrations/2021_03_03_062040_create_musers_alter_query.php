<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMusersAlterQuery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mUsers', function (Blueprint $table) {
            if (!Schema::hasColumn('mUsers', 'Active')) {
                $table->integer('Active');
            }
            if (!Schema::hasColumn('mUsers', 'ClientUID')) {
                $table->unsignedBigInteger('ClientUID')->default(0);
                $table->foreign('ClientUID')->references('ClientUID')->on('mClients');
            }
        });

        Schema::table('mRoles', function (Blueprint $table) {
            if (!Schema::hasColumn('mRoles', 'Active')) {
                $table->integer('Active');
            }
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
    }
}
