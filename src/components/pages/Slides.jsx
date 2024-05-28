import React from "react";
import Map7 from "../maps/Map7";
import Map4 from "../maps/Map4";
import Map3 from "../maps/Map3";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slides = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Maps in slides</h1>
        <p>
          Had the urge to try the react-responsive-carousel component so I tried
          it with some maps that already appear in other sections. Didn't
          customize much.
        </p>
      </div>
      <div>
        <Carousel showArrows={true}>
          <div>
            <Map4
              centerLongitude={2.176944}
              centerLatitude={41.3825}
              zoom={8}
            />
            <p className="legend">Map with style selector</p>
          </div>
          <div>
            <Map3
              centerLongitude={16.3725}
              centerLatitude={48.208333}
              zoom={4}
            />
            <p className="legend">Indiana Jones travel animation</p>
          </div>
          <div>
            <Map7
              centerLongitude={2.176944}
              centerLatitude={41.3825}
              zoom={3}
            />
            <p className="legend">Map with data filters</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slides;
