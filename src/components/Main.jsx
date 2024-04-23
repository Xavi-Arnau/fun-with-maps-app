import React from "react";
import MapComponent from "./MapComponent";

const Main = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Welcome to Fun with Maps</h1>
        <p>
          For learning purposes we are gonna explore some functionality with
          MapLibre.js
        </p>
      </div>
      <div>
        <MapComponent
          centerLongitude={2.176944}
          centerLatitude={41.3825}
          zoom={12}
        />
      </div>
    </div>
  );
};

export default Main;
