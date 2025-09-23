export default function DailyCard() {
  return (
    <article className="day-card">
        <h4 className="preset-6">Tue</h4>
        <img src="./src/assets/icon-rain.webp" alt="Rainy" className="daily-icon"/>
        <div className="day-temp-container">
          <span className="daily-high preset-7">20°</span>
          <span className="daily-low preset-7">14°</span>
        </div>
    </article>
  )
}

//Rendered in DailyForecast component
