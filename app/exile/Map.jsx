import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const icon = L.icon({ iconUrl: "/marker-icon.png" });
  return (
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
  );
}
