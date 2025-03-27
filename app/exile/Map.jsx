'use client'

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function Map({ coor }) {
  const icon = L.icon({ iconUrl: "/marker-icon.png" });

  useEffect(() => {
  }, [coor])

  return (
    <MapContainer
      className="h-full"
      center={coor}
      zoom={100}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
    >
      <ChangeView center={coor} zoom={100} /> 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coor} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}