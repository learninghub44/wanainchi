import L from "leaflet";

export const markerIcon = (color) => {

return new L.DivIcon({

html: `
<div
style="
background:${color};
width:18px;
height:18px;
border-radius:50%;
border:3px solid white;
box-shadow:0 0 10px rgba(0,0,0,.3);
">
</div>
`,

className:"",

iconSize:[18,18]

});

};

export const statusColor = {

pending:"#ffc107",

in_progress:"#007bff",

resolved:"#006600",

rejected:"#BB0000"

};