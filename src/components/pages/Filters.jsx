import React from "react";
import Map7 from "../maps/Map7";

const Filters = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Filtering data</h1>
        <p>Using the method filter of a map</p>
      </div>
      <div>
        <Map7 centerLongitude={2.176944} centerLatitude={41.3825} zoom={3} />
      </div>
    </div>
  );
};

export default Filters;
