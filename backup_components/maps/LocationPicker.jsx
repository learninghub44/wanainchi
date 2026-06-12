import {
MapContainer,
TileLayer,
Marker,
useMapEvents
}
from "react-leaflet";

function ClickHandler({
position,
setPosition
}) {

useMapEvents({

click(e){

setPosition([
e.latlng.lat,
e.latlng.lng
]);

}

});

return position ? (

<Marker position={position}/>

):null;

}

export default function LocationPicker({
position,
setPosition
}) {

return(

<MapContainer
center={[-0.0236,37.9062]}
zoom={6}
style={{
height:"500px"
}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<ClickHandler
position={position}
setPosition={setPosition}
/>

</MapContainer>

);

}