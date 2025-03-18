"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Map, MapPin, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import LocationCarousel from "./LocationCarousel";

export default function Exile() {
  const icon = L.icon({ iconUrl: "/marker-icon.png" });

  return (
    <main className="w-full h-full p-4 grid grid-cols-3 gap-4">
      <div className="rounded-2xl bg-white text-black p-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Luneta Park</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatem officia odit provident, velit ullam dolor.
          Ab est quisquam animi odit enim, qui doloremque, odio debitis vel
          molestias quibusdam labore?
        </p>
        <p className="flex items-center gap-4">
          <Map /> Blvd Ermita, Barangay 666 Zone 72, Manila, 1000 Metro Manila
        </p>
        <LocationCarousel />

        <div className="mt-auto flex justify-between items-center">
          <a className="btn btn-primary">
            <MapPin /> View in Google Maps
          </a>

          <div className="flex gap-4">
            <button className="transform transition duration-75 hover:scale-110 hover:cursor-pointer">
              <ArrowLeftCircle size={32} />
            </button>
            <button className="transform transition duration-75 hover:scale-110 hover:cursor-pointer">
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-2xl flex-1 h-full overflow-hidden">
        <MapContainer
          className="h-full"
          center={[14.5826, 120.9787]}
          zoom={100}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[14.5826, 120.9787]} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}
