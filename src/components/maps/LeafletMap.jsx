import {
MapContainer,
TileLayer,
Marker,
Popup
}
from "react-leaflet";

import { Link } from "react-router-dom";

import {
markerIcon,
statusColor
}
from "../../utils/markerColors";

export default function LeafletMap({ issues=[] }) {

return (

<MapContainer
center={[-0.0236,37.9062]}
zoom={6}
style={{
height:"600px",
width:"100%"
}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{issues.map(issue=>(

<Marker
key={issue.id}
position={[
issue.lat,
issue.lng
]}
icon={
markerIcon(
statusColor[issue.status]
)
}
>

<Popup>

<h3>{issue.title}</h3>

<p>{issue.county}</p>

<p>{issue.status}</p>

<Link
to={`/issue/${issue.id}`}
>
View Details →
</Link>

</Popup>

</Marker>

))}

</MapContainer>

);

}