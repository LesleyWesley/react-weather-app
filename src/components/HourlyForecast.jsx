import HourlyCard from "./HourlyCard"
import DayDropdownModal from "./DayDropdownModal"
import React from "react"

export default function HourlyForecast() {

  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <section className="hourly-forecast-section">
        <header>
          <h3 className="preset-5">Hourly forecast</h3>
          <button type="button" className="day-dropdown" onClick={handleClick}>
            Tuesday
            <img src="./src/assets/icon-dropdown.svg" alt="" />
          </button>
          {open && <DayDropdownModal />}
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
