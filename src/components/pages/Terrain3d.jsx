import React from "react";
import Map6 from "../maps/Map6";

const Terrain3d = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Terrain in 3D</h1>
        <p>Shows the terrain in a different style.</p>
      </div>
      <div>
        <Map6 centerLongitude={11.39085} centerLatitude={47.27574} zoom={12} />
      </div>
    </div>
  );
};

export default Terrain3d;
