import DailyCard from "./DailyCard"

export default function DailyForecast() {
  return (
    <section className="daily-forecast-section">
      <h3 className="preset-5">Daily forecast</h3>
      <div className="daily-card-container">
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />
          <DailyCard
            day="Tues"
            img="./src/assets/icon-rain.webp"
            alt="Rainy"
            high={20}
            low={14}
          />

      </div>
    </section>
  )
}

//Rendered in the MainContent component
