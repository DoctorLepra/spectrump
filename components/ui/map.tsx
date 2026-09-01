"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { ZoomIn, ZoomOut, Compass } from "lucide-react";

interface MapContextType {
  map: maplibregl.Map | null;
  isLoaded: boolean;
}

const MapContext = createContext<MapContextType>({ map: null, isLoaded: false });

// 100% Official OpenStreetMap Standard Tiles
const DEFAULT_MAP_STYLE = {
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "osm-tiles-layer",
      type: "raster",
      source: "osm-tiles",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export interface MapProps {
  center?: [number, number]; // [lng, lat]
  zoom?: number;
  pitch?: number;
  bearing?: number;
  styleUrl?: string | object;
  blank?: boolean;
  grayscale?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Map({
  center = [-67.493708, 6.190538], // 6°11'25.9"N 67°29'37.4"W
  zoom = 15,
  pitch = 0,
  bearing = 0,
  styleUrl,
  blank = false,
  grayscale = true,
  className = "w-full h-full min-h-[350px] relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm",
  children,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const chosenStyle = blank
      ? {
          version: 8,
          sources: {},
          layers: [{ id: "background", type: "background", paint: { "background-color": "transparent" } }],
        }
      : styleUrl || DEFAULT_MAP_STYLE;

    try {
      const mapInstance = new maplibregl.Map({
        container: containerRef.current,
        style: chosenStyle as any,
        center: center,
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        attributionControl: false,
      });

      mapInstance.on("load", () => {
        setIsLoaded(true);
      });

      mapInstance.on("error", () => {
        setHasError(true);
      });

      // Force canvas resize calculation
      setTimeout(() => {
        mapInstance.resize();
      }, 150);

      mapRef.current = mapInstance;

      return () => {
        mapInstance.remove();
      };
    } catch (e) {
      setHasError(true);
    }
  }, [center, zoom, pitch, bearing, styleUrl, blank]);

  return (
    <MapContext.Provider value={{ map: mapRef.current, isLoaded }}>
      <div
        className={`${className} ${grayscale ? "[&_canvas]:filter [&_canvas]:grayscale [&_canvas]:contrast-[1.05] [&_iframe]:filter [&_iframe]:grayscale" : ""}`}
        ref={containerRef}
      >
        {hasError ? (
          <iframe
            title="Mapa de Ubicación SPECTRUMP"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${center[1]},${center[0]}&z=${zoom}&output=embed`}
          />
        ) : (
          children
        )}
      </div>
    </MapContext.Provider>
  );
}

export function MapControls() {
  const { map } = useContext(MapContext);

  if (!map) return null;

  return (
    <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1 bg-white/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-200 shadow-md">
      <button
        type="button"
        onClick={() => map.zoomIn()}
        className="p-2 text-slate-700 hover:text-[#0052CC] hover:bg-slate-100 rounded-lg transition-colors"
        title="Acercar"
      >
        <ZoomIn className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => map.zoomOut()}
        className="p-2 text-slate-700 hover:text-[#0052CC] hover:bg-slate-100 rounded-lg transition-colors"
        title="Alejar"
      >
        <ZoomOut className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => map.resetNorth()}
        className="p-2 text-slate-700 hover:text-[#0052CC] hover:bg-slate-100 rounded-lg transition-colors"
        title="Orientar al Norte"
      >
        <Compass className="w-4 h-4" />
      </button>
    </div>
  );
}

export interface MapMarkerProps {
  coordinates: [number, number]; // [lng, lat]
  title?: string;
  children?: React.ReactNode;
}

export function MapMarker({ coordinates, title }: MapMarkerProps) {
  const { map, isLoaded } = useContext(MapContext);

  useEffect(() => {
    if (!map || !isLoaded) return;

    // Create DOM element programmatically so React reconciliation won't unmount or detach it when parent re-renders
    const el = document.createElement("div");
    el.className = "maplibre-custom-marker cursor-pointer group relative z-20 pointer-events-auto";
    el.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center shadow-lg border-2 border-white transform hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        </div>
        ${title ? `<div class="mt-1.5 px-3.5 py-1.5 bg-slate-900 text-white text-xs font-sans font-extrabold rounded-xl shadow-xl whitespace-nowrap border border-slate-700/80 pointer-events-none">${title}</div>` : ''}
      </div>
    `;

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat(coordinates)
      .addTo(map);

    return () => {
      marker.remove();
    };
  }, [map, isLoaded, coordinates, title]);

  return null;
}
