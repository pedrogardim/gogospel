<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMissionRequest;
use App\Http\Requests\UpdateMissionRequest;
use App\Models\Mission;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function explore()
    {
        $missions = Mission::select(
            '*', 
            DB::raw('st_x(location::geometry)::float as long'), 
            DB::raw('st_y(location::geometry)::float as lat')
        )->where('id','!=',null)->get();

        $missions->transform(function ($mission) {
            $mission->long = (float) $mission->long;
            $mission->lat = (float) $mission->lat;
            return $mission;
        });
        
        return $missions;
    }

    /**
     * Display a listing of the resource.
     */
    public function viewExplore()
    {
        return Inertia::render('Mission/Explore', [
            'missions' => $this->explore(),
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
    public function store(StoreMissionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mission $mission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mission $mission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMissionRequest $request, Mission $mission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mission $mission)
    {
        //
    }
}
