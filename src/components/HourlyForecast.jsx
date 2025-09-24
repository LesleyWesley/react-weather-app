import HourlyCard from "./HourlyCard"

export default function HourlyForecast() {
  return (
    <section className="hourly-forecast-section">
        <header>
          <h3 className="preset-5">Hourly forecast</h3>
          <p>Day Dropdown</p>
        </header>
        <div className="hourly-card-container">
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
            <HourlyCard />
        </div>
    </section>
  )
}

//Rendered in MainContent component
