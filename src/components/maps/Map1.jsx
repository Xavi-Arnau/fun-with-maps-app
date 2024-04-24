import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map1 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [locations, setLocations] = useState([]);

  const arrayMarkers = [
    { location: "Sagrada Familia", lng: 2.17433, lat: 41.40369 },
    { location: "La Pedrera", lng: 2.161667, lat: 41.395278 },
    { location: "Plaça Catalunya", lng: 2.170079, lat: 41.387031 },
    { location: "Santa Maria del Mar", lng: 2.181944, lat: 41.383611 },
  ];

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

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const marker = arrayMarkers.pop();
      if (marker) {
        setLocations((locations) => [...locations, marker]);
        new maplibregl.Marker({ color: "red" })
          .setLngLat([marker.lng, marker.lat])
          .setPopup(
            new maplibregl.Popup().setHTML(
              "<h1 class='bg-black text-white py-2 px-4 rounded-xl font-bold'>" +
                marker.location +
                "</h1>"
            )
          ) // add popup
          .addTo(mapRef.current)
          .togglePopup();
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);
  console.log(locations);
  return (
    <div className="flex flex-row gap-4">
      <div ref={mapContainerRef} className="w-3/4 h-[500px]"></div>
      <div className="w-1/4 flex flex-col gap-4">
        {locations && locations.length
          ? locations.map((item) => (
              <div
                className="p-4 text-2xl bg-forestGreen rounded-xl text-white"
                key={item.location}
              >
                {item.location}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Map1;
