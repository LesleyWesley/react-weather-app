export default function DailyForecast() {
  return (
    <section className="daily-forecast-section">
      <h3 className="preset-5">Daily forecast</h3>
      <div className="daily-card-container">
          <article className="day-card">
              <h4 className="preset-6">Tue</h4>
              <img src="./src/assets/icon-rain.webp" alt="Rainy" className="daily-icon"/>
              <div className="day-temp-container">
                <span className="daily-high preset-7">20°</span>
                <span className="daily-low preset-7">14°</span>
              </div>
          </article>
      </div>
    </section>
  )
}

//Rendered in the MainContent component
