import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map4 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const styles = [
    {
      name: "Openstreetmap",
      url: "https://api.maptiler.com/maps/openstreetmap/style.json?key=LiH20XNxcFiTXyT4fgjM",
    },
    {
      name: "Bright dark",
      url: "https://api.maptiler.com/maps/bright-v2-dark/style.json?key=LiH20XNxcFiTXyT4fgjM",
    },
    {
      name: "Winter dark",
      url: "https://api.maptiler.com/maps/winter-v2-dark/style.json?key=LiH20XNxcFiTXyT4fgjM",
    },
    {
      name: "Hybrid",
      url: "https://api.maptiler.com/maps/hybrid/style.json?key=LiH20XNxcFiTXyT4fgjM",
    },
    {
      name: "Outdoor",
      url: "https://api.maptiler.com/maps/outdoor-v2/style.json?key=LiH20XNxcFiTXyT4fgjM",
    },
  ];
  const [style, setStyle] = useState(styles[0].url);
  useEffect(() => {
    if (mapRef.current) return; // stops map from intializing more than once
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: style,
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

  const handleChangeStyle = (event) => {
    setStyle(event.target.value);
    mapRef.current.setStyle(event.target.value);
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <select
          onChange={handleChangeStyle}
          name="styles"
          id="styles"
          className="border rounded-xl border-black px-6 py-2 bg-gray-50"
        >
          {styles.map((item) => (
            <option value={item.url}>{item.name}</option>
          ))}
        </select>
      </div>
      <div ref={mapContainerRef} className="w-full h-[500px]"></div>
    </div>
  );
};

export default Map4;
