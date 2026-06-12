import LocationPicker from "../maps/LocationPicker";
import ImageUpload from "../upload/ImageUpload";

export default function StepTwo({
position,
setPosition,
files,
setFiles
}) {

return(

<div>

<h2>
Location & Evidence
</h2>

<LocationPicker
position={position}
setPosition={setPosition}
/>

<button
type="button"
onClick={()=>{

navigator.geolocation.getCurrentPosition(
(pos)=>{

setPosition([
pos.coords.latitude,
pos.coords.longitude
]);

}
);

}}
>

Use My Location

</button>

<ImageUpload
files={files}
setFiles={setFiles}
/>

</div>

);

}