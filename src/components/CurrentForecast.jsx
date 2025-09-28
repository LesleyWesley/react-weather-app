export default function CurrentForecast(props) {
  return (
    <section className="current-forecast-section">

      <div className="main-widget">
          <div className="main-widget-container">
            <div className="current-info">
                <span className="location preset-4">{props.location}</span>
                <time datetime={props.datetime} className="preset-6">{props.currentDay}</time>
            </div>
            <div className="current-temp-section">
                <img src={props.img} alt={props.alt} className="weather-icon"/>
                <span className="current-temp-section preset-1">{props.currentTemp}°</span>
            </div>
          </div>
      </div>


      <div className="current-details">
          <div className="current-detail-card">
            <h2 className="preset-6">Feels Like</h2>
            <span className="preset-3">{props.feelsLike}°</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Humidity</h2>
            <span className="preset-3">{props.humidity}%</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Wind</h2>
            <span className="preset-3">{props.wind} {props.windUnits}</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Precipitation</h2>
            <span className="preset-3">{props.precipitation} {props.precipUnits}</span>
          </div>
      </div>
    </section>
  )
}

//Rendered in the MainSection component
