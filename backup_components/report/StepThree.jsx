export default function StepThree({
formData,
position,
files
}) {

return(

<div>

<h2>
Review Submission
</h2>

<p>
<strong>Title:</strong>
{formData.title}
</p>

<p>
<strong>Category:</strong>
{formData.category}
</p>

<p>
<strong>County:</strong>
{formData.county}
</p>

<p>
<strong>Urgency:</strong>
{formData.urgency}
</p>

<p>
<strong>Description:</strong>
</p>

<p>
{formData.description}
</p>

<p>
Photos:
{files.length}
</p>

<p>
Location:
{position
? `${position[0]}, ${position[1]}`
: "Not selected"}
</p>

<label>

<input type="checkbox" />

I confirm this report is accurate.

</label>

</div>

);

}