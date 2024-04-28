import React from "react";
import Map5 from "../maps/Map5";

const Buildings3d = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Buildings in 3D</h1>
        <p>Pitched map showing the buildings in 3D.</p>
      </div>
      <div>
        <Map5 centerLongitude={2.176944} centerLatitude={41.3825} zoom={16} />
      </div>
    </div>
  );
};

export default Buildings3d;
