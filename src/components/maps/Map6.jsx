import React, { useRef, useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map6 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // stops map from intializing more than once
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,

      zoom: zoom,
      center: [centerLongitude, centerLatitude],
      pitch: 52,
      hash: true,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 19,
          },
          // Use a different source for terrain and hillshade layers, to improve render quality
          terrainSource: {
            type: "raster-dem",
            url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
            tileSize: 256,
          },
          hillshadeSource: {
            type: "raster-dem",
            url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
          {
            id: "hills",
            type: "hillshade",
            source: "hillshadeSource",
            layout: { visibility: "visible" },
            paint: { "hillshade-shadow-color": "#473B24" },
          },
        ],
        terrain: {
          source: "terrainSource",
          exaggeration: 1,
        },
      },
      maxZoom: 18,
      maxPitch: 85,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl());
    const scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    });
    mapRef.current.addControl(scale);
    mapRef.current.addControl(
      new maplibregl.TerrainControl({
        source: "terrainSource",
        exaggeration: 1,
      })
    );
  }, [centerLongitude, centerLatitude, zoom]);

  return (
    <div className="flex flex-col gap-6">
      <div ref={mapContainerRef} className="w-full h-[500px]"></div>
    </div>
  );
};

export default Map6;
