<?php

namespace App\Http\Controllers;

use App\Models\Hosting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HostingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hosting = Hosting::all();
        return Inertia::render('Main', [
            'title' => "Yo 1",
            'description' => "Selamat Datangg",
            'hosting' => $hosting,


        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Hosting $hosting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hosting $hosting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Hosting $hosting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hosting $hosting)
    {
        //
    }
}
