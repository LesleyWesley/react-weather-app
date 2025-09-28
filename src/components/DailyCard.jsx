export default function DailyCard(props) {
  return (
    <article className="day-card">
        <h4 className="preset-6">{props.day}</h4>
        <img src={props.img} alt={props.alt} className="daily-icon"/>
        <div className="day-temp-container">
          <span className="daily-high preset-7">{props.high}°</span>
          <span className="daily-low preset-7">{props.low}°</span>
        </div>
    </article>
  )
}

//Rendered in DailyForecast component
