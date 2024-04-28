import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map7 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://api.maptiler.com/maps/streets-v2/style.json?key=LiH20XNxcFiTXyT4fgjM",
      center: [centerLongitude, centerLatitude],
      zoom: zoom,
    });
    mapRef.current.addControl(new maplibregl.NavigationControl());
    const scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    });
    mapRef.current.addControl(scale);
  }, [centerLongitude, centerLatitude, zoom]);

  // Create a GeoJSON source with an empty lineString.
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.176944, 41.3825],
        },
        properties: { name: "Barcelona", beach: true, language: "catalan" },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-3.703333, 40.416944],
        },
        properties: { name: "Madrid", beach: false, language: "spanish" },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.352222, 48.856667],
        },
        properties: { name: "Paris", beach: false, language: "french" },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [13.383333, 52.516667],
        },
        properties: { name: "Berlin", beach: false, language: "german" },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [19.937222, 50.061389],
        },
        properties: { name: "Krakow", beach: false, language: "polish" },
      },
    ],
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on("load", () => {
        mapRef.current.addSource("cities-source", {
          type: "geojson",
          data: geojson,
        });

        // add the line which will be modified in the animation
        mapRef.current.addLayer({
          id: "cities-layer",
          type: "circle",
          source: "cities-source",
          paint: {
            "circle-radius": 6,
            "circle-color": "#B42222",
          },
        });
      });
    }
  }, []);

  const handleFilterBeach = () => {
    mapRef.current.setFilter("cities-layer", ["==", "beach", true]);
    setFilter("beach");
  };
  const handleFilterFrench = () => {
    mapRef.current.setFilter("cities-layer", ["==", "language", "french"]);
    setFilter("french");
  };
  const clearFilter = () => {
    mapRef.current.setFilter("cities-layer", null);
    setFilter("");
  };

  return (
    <>
      <div
        ref={mapContainerRef}
        className="w-full h-[500px] relative flex flex-row justify-center"
      >
        <div className="absolute bg-black opacity-70 text-white  z-20 px-4 py-2 w-1/2 md:w-1/5 rounded-xl">
          Filtering by: {filter}
        </div>
        <div className="absolute text-white top-2 left-2 md:top-auto md:bottom-2 md:left-2 z-20 px-4 py-2 w-1/2 md:w-1/5 rounded-xl flex flex-col gap-4">
          <button
            onClick={handleFilterBeach}
            className="bg-green-600 rounded-lg text-white py-2 px-6 active:bg-green-400 text-base font-bold"
          >
            Cities with beach
          </button>
          <button
            onClick={handleFilterFrench}
            className="bg-green-600 rounded-lg text-white py-2 px-6 active:bg-green-400 text-base font-bold"
          >
            Cities that speak french
          </button>
          <button
            onClick={clearFilter}
            className="bg-red-600 rounded-lg text-white py-2 px-6 active:bg-green-400 text-base font-bold"
          >
            Clear filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Map7;
