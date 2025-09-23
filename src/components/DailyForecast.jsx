import DailyCard from "./DailyCard"

export default function DailyForecast() {
  return (
    <section className="daily-forecast-section">
      <h3 className="preset-5">Daily forecast</h3>
      <div className="daily-card-container">
          <DailyCard />
          <DailyCard />
          <DailyCard />
          <DailyCard />
          <DailyCard />
          <DailyCard />
          <DailyCard />
      </div>
    </section>
  )
}

//Rendered in the MainContent component
