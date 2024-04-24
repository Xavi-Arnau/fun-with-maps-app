import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map2 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const requestId = useRef(null);
  const [speed, setSpeed] = useState(500);

  useEffect(() => {
    if (mapRef.current) return; // stops map from intializing more than once
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

  const marker = new maplibregl.Marker({ color: "red" });
  useEffect(() => {
    const animate = (timestamp) => {
      // Animation code goes here
      const radius = 0.02;

      marker
        .setLngLat([
          centerLongitude + radius * Math.cos(timestamp / speed),
          centerLatitude + radius * Math.sin(timestamp / speed),
        ])
        .addTo(mapRef.current);

      requestId.current = requestAnimationFrame(animate);
    };
    requestId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, [speed]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-6 justify-center">
        <button
          onClick={() => setSpeed(500)}
          className="bg-red-500 text-white rounded-xl py-2 px-8"
        >
          Faster
        </button>
        <button
          onClick={() => setSpeed(2000)}
          className="bg-goblinGreen text-white rounded-xl py-2 px-8"
        >
          Slower
        </button>
      </div>
      <div ref={mapContainerRef} className="w-full h-[500px]"></div>
    </div>
  );
};

export default Map2;
