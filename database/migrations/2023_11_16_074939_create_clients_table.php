<?php

// database/migrations/yyyy_mm_dd_create_clients_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->uuid('id')->primary(); // Change to UUID
            $table->foreignUuid('user_id')->constrained(); // Assuming you are using Laravel 7+
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('current_address');
            $table->string('permanent_address');
            $table->date('birthdate');
            $table->string('gender');
            $table->enum('type', ['EMPLOYEE', 'ADMIN', 'STAFF', 'USER']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
}
