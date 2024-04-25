import React from "react";
import Map4 from "../maps/Map4";

const MapStyles = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Playing with map styles</h1>
        <p>Switch between map styles and see what happens.</p>
      </div>
      <div>
        <Map4 centerLongitude={2.176944} centerLatitude={41.3825} zoom={8} />
      </div>
    </div>
  );
};

export default MapStyles;
