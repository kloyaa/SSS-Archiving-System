<?php

// app/Http/Controllers/Api/ClientController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');

    }

    public function all()
    {
        $clients = Client::all();
        return response()->json($clients);
    }

    public function show($id)
    {
        $client = Client::findOrFail($id);
        return response()->json($client);
    }

    public function create(Request $request)
    {
        try {

            return auth()->id();
            $request->validate([
                'user_id' => 'required|exists:users,id',
                'first_name' => 'required|string',
                'middle_name' => 'required|string',
                'last_name' => 'required|string',
                'current_address' => 'required|string',
                'permanent_address' => 'required|string',
                'birthdate' => 'required|date',
                'gender' => 'required|string',
                'type' => 'required|in:EMPLOYEE,ADMIN,STAFF,USER',
            ]);

            $client = Client::create([
                'user_id' => $request->user_id,
                'first_name' => $request->first_name,
                'middle_name' => $request->middle_name,
                'last_name' => $request->last_name,
                'current_address' => $request->current_address,
                'permanent_address' => $request->permanent_address,
                'birthdate' => $request->birthdate,
                'gender' => $request->gender,
                'type' => $request->type,

                // 'name' => $request->name,
                // 'email' => $request->email,
                // 'password' => Hash::make($request->password),
            ]);

            return response()->json($client, 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'exists:users,id',
            'first_name' => 'string',
            'middle_name' => 'nullable|string',
            'last_name' => 'string',
            'current_address' => 'string',
            'permanent_address' => 'string',
            'birthdate' => 'date',
            'gender' => 'string',
            'type' => 'in:EMPLOYEE,ADMIN,STAFF,USER',
        ]);

        $client = Client::findOrFail($id);
        $client->update($request->all());

        return response()->json($client, 200);
    }

    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json(null, 204);
    }
}
