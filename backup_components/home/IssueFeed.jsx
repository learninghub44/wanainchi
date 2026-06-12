const issues = [

{
id:1,
title:"Blocked drainage causing flooding near Nyanchwa Market",
county:"Kisii",
category:"Drainage",
status:"Pending",
supports:184
},

{
id:2,
title:"Street lights not functioning along Jogoo Road",
county:"Nairobi",
category:"Street Lighting",
status:"In Progress",
supports:95
},

{
id:3,
title:"Water shortage affecting households in Mwiki",
county:"Nairobi",
category:"Water",
status:"Verified",
supports:267
}

];

export default function IssueFeed() {

return (

<section
id="issues"
className="section"
>

<div className="container">

<h2 className="section-heading">
Latest Community Reports
</h2>

<div className="issues-grid">

{issues.map(issue=>(

<div
key={issue.id}
className="issue-card"
>

<span className="issue-status">
{issue.status}
</span>

<h3>
{issue.title}
</h3>

<p>
{issue.category}
</p>

<p>
📍 {issue.county}
</p>

<p>
👍 {issue.supports} supporters
</p>

<a
href={`/issue/${issue.id}`}
className="view-link"
>
View Details →
</a>

</div>

))}

</div>

</div>

</section>

);

}