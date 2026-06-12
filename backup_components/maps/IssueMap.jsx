import {
MapContainer,
TileLayer,
Marker
}
from "react-leaflet";

export default function IssueMap({
lat,
lng
}) {

return (

<MapContainer
center={[lat,lng]}
zoom={15}
style={{
height:"400px"
}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker
position={[lat,lng]}
/>

</MapContainer>

);

}