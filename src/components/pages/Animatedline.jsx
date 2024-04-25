import React from "react";
import Map3 from "../maps/Map3";

const Animatedline = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Animated line</h1>
        <p>
          Let's try to do something cool like the travel maps animation from
          Indiana Jones.
        </p>
      </div>
      <div>
        <Map3 centerLongitude={16.3725} centerLatitude={48.208333} zoom={4} />
      </div>
    </div>
  );
};

export default Animatedline;
