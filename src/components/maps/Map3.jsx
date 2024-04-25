import React, { useRef, useState, useEffect } from "react";
import * as turf from "@turf/turf";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map3 = ({ centerLongitude, centerLatitude, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const requestId = useRef(null);

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

  // Create a GeoJSON source with an empty lineString.
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [2.176944, 41.3825],
            [2.352222, 48.856667],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [2.352222, 48.856667],
            [13.383333, 52.516667],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [13.383333, 52.516667],
            [19.937222, 50.061389],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [19.937222, 50.061389],
            [37.617778, 55.755833],
          ],
        },
      },
    ],
  };
  const lineDistance = turf.lineDistance(geojson.features[0], "kilometers");
  const route = [];
  const steps = 300;
  const stepsSlow = 400;
  const stepsFast = 100;

  // Draw an arc between the `origin` & `destination` of the two points
  for (let i = 0; i < lineDistance; i += lineDistance / stepsFast) {
    const segment = turf.along(geojson.features[0], i, "kilometers");
    route.push(segment.geometry.coordinates);
  }
  const lineDistance2 = turf.lineDistance(geojson.features[1], "kilometers");
  // Draw an arc between the `origin` & `destination` of the two points
  for (let i = 0; i < lineDistance2; i += lineDistance2 / steps) {
    const segment = turf.along(geojson.features[1], i, "kilometers");
    route.push(segment.geometry.coordinates);
  }
  const lineDistance3 = turf.lineDistance(geojson.features[2], "kilometers");
  // Draw an arc between the `origin` & `destination` of the two points
  for (let i = 0; i < lineDistance3; i += lineDistance3 / stepsSlow) {
    const segment = turf.along(geojson.features[2], i, "kilometers");
    route.push(segment.geometry.coordinates);
  }
  const lineDistance4 = turf.lineDistance(geojson.features[3], "kilometers");
  // Draw an arc between the `origin` & `destination` of the two points
  for (let i = 0; i < lineDistance4; i += lineDistance4 / steps) {
    const segment = turf.along(geojson.features[3], i, "kilometers");
    route.push(segment.geometry.coordinates);
  }

  geojson.features[0].geometry.coordinates = [];
  geojson.features[1].geometry.coordinates = [];
  geojson.features[2].geometry.coordinates = [];
  geojson.features[3].geometry.coordinates = [];

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on("load", () => {
        mapRef.current.addSource("line", {
          type: "geojson",
          data: geojson,
        });

        // add the line which will be modified in the animation
        mapRef.current.addLayer({
          id: "line-animation",
          type: "line",
          source: "line",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "red",
            "line-width": 8,
            "line-opacity": 0.8,
          },
        });

        //console.log(geojson.features[0].geometry.coordinates[4]);
        const animate = (timestamp) => {
          if (route.length > 0) {
            let newPoint = route.shift();
            geojson.features[0].geometry.coordinates.push(newPoint);
            mapRef.current.getSource("line").setData(geojson);
            mapRef.current.setCenter(newPoint);
            if (route.length < 70) {
              mapRef.current.zoomTo(6, { duration: 2000 });
            }
          }
          requestId.current = requestAnimationFrame(animate);
        };
        requestId.current = requestAnimationFrame(animate);
      });

      return () => {
        cancelAnimationFrame(requestId.current);
      };
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div ref={mapContainerRef} className="w-full h-[500px]"></div>
    </div>
  );
};

export default Map3;
