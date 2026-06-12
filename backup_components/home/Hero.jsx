export default function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-content">

          <span className="hero-tag">
            Independent Citizen Platform
          </span>

          <h1>
            Your Voice Can Improve
            Your Community
          </h1>

          <p>
            Report local issues, share evidence,
            and help bring attention to problems
            affecting communities across Kenya.
          </p>

          <div className="hero-actions">

            <a href="/report" className="btn-primary">
              Report an Issue
            </a>

            <a href="#issues" className="btn-secondary">
              Browse Reports
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}