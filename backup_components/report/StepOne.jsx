import { counties } from "../../data/counties";

export default function StepOne({
formData,
setFormData
}) {

return(

<div>

<h2>Issue Information</h2>

<input
type="text"
placeholder="Issue Title"
value={formData.title}
onChange={(e)=>
setFormData({
...formData,
title:e.target.value
})
}
/>

<select
value={formData.category}
onChange={(e)=>
setFormData({
...formData,
category:e.target.value
})
}
>

<option value="">
Select Category
</option>

<option>Roads</option>
<option>Water</option>
<option>Electricity</option>
<option>Drainage</option>
<option>Waste Management</option>
<option>Security</option>

</select>

<select
value={formData.county}
onChange={(e)=>
setFormData({
...formData,
county:e.target.value
})
}
>

<option value="">
Select County
</option>

{counties.map(county=>(
<option
key={county}
value={county}
>
{county}
</option>
))}

</select>

<textarea
rows="8"
maxLength="2000"
placeholder="Describe the issue"
value={formData.description}
onChange={(e)=>
setFormData({
...formData,
description:e.target.value
})
}
/>

<p>
{formData.description.length}/2000
</p>

<select
value={formData.urgency}
onChange={(e)=>
setFormData({
...formData,
urgency:e.target.value
})
}
>

<option>
Urgency
</option>

<option>
Low
</option>

<option>
Medium
</option>

<option>
High
</option>

<option>
Critical
</option>

</select>

</div>

);

}