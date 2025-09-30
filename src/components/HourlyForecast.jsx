import HourlyCard from "./HourlyCard"

export default function HourlyForecast() {
  return (
    <section className="hourly-forecast-section">
        <header>
          <h3 className="preset-5">Hourly forecast</h3>
          <button type="button" className="day-dropdown">
            Tuesday
            <img src="./src/assets/icon-dropdown.svg" alt="" />
          </button>
        </header>
        <div className="hourly-card-container">
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
            <HourlyCard
                img="./src/assets/icon-overcast.webp"
                alt="Overcast"
                time="4 PM"
                temp={20}
            />
        </div>
    </section>
  )
}

//Rendered in MainContent component
