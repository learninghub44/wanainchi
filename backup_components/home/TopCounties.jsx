const counties = [

{
name:"Nairobi",
reports:3210
},

{
name:"Kisii",
reports:1820
},

{
name:"Nakuru",
reports:1650
},

{
name:"Mombasa",
reports:1490
},

{
name:"Kisumu",
reports:1180
}

];

export default function TopCounties(){

return(

<section className="section">

<div className="container">

<h2 className="section-heading">

Most Active Counties

</h2>

<div className="county-grid">

{counties.map((county,index)=>(

<div
key={index}
className="county-card"
>

<h3>{county.name}</h3>

<p>{county.reports} reports</p>

</div>

))}

</div>

</div>

</section>

);

}