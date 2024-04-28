import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map5 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // stops map from intializing more than once
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://api.maptiler.com/maps/streets-v2/style.json?key=LiH20XNxcFiTXyT4fgjM",
      center: [centerLongitude, centerLatitude],
      zoom: zoom,
      pitch: 45,
      antialias: true,
      bearing: -17.6,
    });
    mapRef.current.addControl(new maplibregl.NavigationControl());
    const scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    });
    mapRef.current.addControl(scale);
  }, [centerLongitude, centerLatitude, zoom]);

  useEffect(() => {
    // The 'building' layer in the streets vector source contains building-height
    // data from OpenStreetMap.
    mapRef.current.on("load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = mapRef.current.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      mapRef.current.addSource("openmaptiles", {
        url: `https://api.maptiler.com/tiles/v3/tiles.json?key=LiH20XNxcFiTXyT4fgjM`,
        type: "vector",
      });

      mapRef.current.addLayer(
        {
          id: "3d-buildings",
          source: "openmaptiles",
          "source-layer": "building",
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "render_height"],
              0,
              "lightgray",
              200,
              "royalblue",
              400,
              "lightblue",
            ],
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              16,
              ["get", "render_height"],
            ],
            "fill-extrusion-base": [
              "case",
              [">=", ["get", "zoom"], 16],
              ["get", "render_min_height"],
              0,
            ],
          },
        },
        labelLayerId
      );
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div ref={mapContainerRef} className="w-full h-[500px]"></div>
    </div>
  );
};

export default Map5;
