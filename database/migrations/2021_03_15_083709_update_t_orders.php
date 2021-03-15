<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tOrders', function (Blueprint $table) {
            $table->dropColumn('LoanTypeUID');
            $table->dropColumn('LenderUID');
            $table->dropColumn('ClosingDate');
            $table->tinyInteger('MockDocument')->after('ClientUID')->nullable();
            $table->tinyInteger('SourceDocument')->after('MockDocument')->nullable();
            $table->tinyInteger('ManualEdit')->after('SourceDocument')->nullable();
        });

        Schema::table('tOrdersDocuments', function (Blueprint $table) {
            $table->tinyInteger('OcrStatus')->after('FilePath')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tOrders', function (Blueprint $table) {
            if (Schema::hasColumn('tOrders', 'MockDocument')) {

                $table->dropColumn('MockDocument');
            }
            if (Schema::hasColumn('tOrders', 'SourceDocument')) {

                $table->dropColumn('SourceDocument');
            }
            if (Schema::hasColumn('tOrders', 'ManualEdit')) {

                $table->dropColumn('ManualEdit');
            }
        });

        Schema::table('tOrdersDocuments', function (Blueprint $table) {
            if (Schema::hasColumn('tOrders', 'OcrStatus')) {

                $table->dropColumn('OcrStatus');
            }
        });
    }
}
