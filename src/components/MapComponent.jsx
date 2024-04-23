import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

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
    setMap(map);
  }, []);

  return <div ref={mapContainerRef} className="w-full h-[500px]" />;
};

export default MapComponent;
