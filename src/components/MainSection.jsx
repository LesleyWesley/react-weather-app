import SearchSection from "./SearchSection"
import CurrentForecast from "./CurrentForecast"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"

export default function MainSection() {
  return (
    <main>
      <SearchSection />
      <div className="grid-section">
          <div className="left-side">
              <CurrentForecast />
              <DailyForecast />
          </div>
          <div className="right-side">
              <HourlyForecast />
          </div>
      </div>
    </main>
  )
}
