import React from "react";
import Map2 from "../maps/Map2";

const Animatedmarkers = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">
          A marker making circles around a given point
        </h1>
        <p>Animated a marker to make it do spin around a given coordinates.</p>
      </div>
      <div>
        <Map2 centerLongitude={2.176944} centerLatitude={41.3825} zoom={12} />
      </div>
    </div>
  );
};

export default Animatedmarkers;
