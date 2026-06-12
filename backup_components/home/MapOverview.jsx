import LeafletMap from "../maps/LeafletMap";
import { sampleIssues } from "../../data/sampleIssues";

export default function MapOverview(){

return(

<section className="section">

<div className="container">

<h2 className="section-heading">

Community Issues Map

</h2>

<LeafletMap
issues={sampleIssues}
/>

</div>

</section>

);

}
import LeafletMap from "../maps/LeafletMap";
import { sampleIssues } from "../../data/sampleIssues";

export default function MapOverview() {

  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Community Issues Map
        </h2>

        <LeafletMap issues={sampleIssues} />

        <div className="legend">

          <div>
            <span className="pending"></span>
            Pending
          </div>

          <div>
            <span className="progress"></span>
            In Progress
          </div>

          <div>
            <span className="resolved"></span>
            Resolved
          </div>

          <div>
            <span className="rejected"></span>
            Rejected
          </div>

        </div>

      </div>

    </section>
  );

}