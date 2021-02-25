<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('tOrders', function (Blueprint $table) {
            if (Schema::hasColumn('tOrders', 'CustomerUID')) {
                $table->unsignedBigInteger('CustomerUID')->change();
                $table->renameColumn('CustomerUID', 'ClientUID');
            }
            $table->foreign('ClientUID')->references('ClientUID')->on('mClients');

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
        Schema::table('tOrders', function (Blueprint $table) {
            if (Schema::hasColumn('tOrders', 'ClientUID')) {

                $table->dropForeign(['ClientUID']);
                $table->renameColumn('ClientUID', 'CustomerUID');
            }

        });
    }
}
