import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://api.maptiler.com/maps/streets-v2/style.json?key=LiH20XNxcFiTXyT4fgjM",
      center: [centerLongitude, centerLatitude],
      zoom: zoom,
    });
    map.addControl(new maplibregl.NavigationControl());
    const scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    });
    map.addControl(scale);
    //markers
    const marker = new maplibregl.Marker({ color: "red", draggable: true })
      .setLngLat([centerLongitude, centerLatitude])
      .on("dragend", () => {
        setLong(marker.getLngLat().lat);
        setLat(marker.getLngLat().lng);
      })
      .addTo(map);
    setLong(marker.getLngLat().lat);
    setLat(marker.getLngLat().lng);
    setMap(map);
  }, [centerLongitude, centerLatitude, zoom]);

  return (
    <>
      <div ref={mapContainerRef} className="w-full h-[500px] relative">
        <div className="absolute bg-black opacity-70 text-white top-2 left-2 md:top-auto md:bottom-2 md:left-2 z-20 px-4 py-2 w-1/2 md:w-1/5 rounded-xl">
          <p>Longitude: {long}</p>
          <p>Latitude: {lat}</p>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
