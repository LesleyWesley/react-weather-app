export default function HourlyCard(props) {
  return (
    <article className="hourly-card">
      <div className="hourly-content-container">
        <div className="hourly-card-left">
            <img src={props.img} alt={props.alt} className="hourly-icon"/>
            <h4 className="preset-5">{props.time}</h4>
        </div>
        <span className="preset-7">{props.temp}°</span>
      </div>
    </article>
  )
}
