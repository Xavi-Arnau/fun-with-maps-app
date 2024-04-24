import React from "react";
import Map1 from "../maps/Map1";

const Automarkers = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">
          Some markers added to the map in succession
        </h1>
        <p>
          Add some markers in rapid succession to the map. A tribute to some
          work I did years ago for a landing page using google maps.
        </p>
      </div>
      <div>
        <Map1 centerLongitude={2.176944} centerLatitude={41.3825} zoom={12} />
      </div>
    </div>
  );
};

export default Automarkers;
