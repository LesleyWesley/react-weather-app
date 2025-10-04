import CurrentForecast from "./CurrentForecast"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"

export default function GridSection() {
  return (
    <div className="grid-section">
        <div className="left-side">
            <CurrentForecast
                location="Berlin, Germany"
                datetime="09-05-2025"
                currentDay="Tuesday, Aug 5, 2025"
                img="./src/assets/icon-sunny.webp"
                alt="Sunny"
                currentTemp={20}
                feelsLike={18}
                humidity={46}
                wind={14}
                windUnits="km/h"
                precipitation={0}
                precipUnits="mm"
             />
            <DailyForecast />
        </div>
        <div className="right-side">
            <HourlyForecast />
        </div>
    </div>
  )
}

//Rendered in MainSection component
