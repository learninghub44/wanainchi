const stats = [
  {
    value: "12",
    label: "Reports Submitted"
  },
  {
    value: "4",
    label: "Issues Resolved"
  },
  {
    value: "47",
    label: "Counties Covered"
  },
  {
    value: "18,900",
    label: "Community Supporters"
  }
];

export default function StatsSection() {

  return (
    <section className="section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item,index)=>(
            <div className="stat-card" key={index}>

              <h2>{item.value}</h2>

              <p>{item.label}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}