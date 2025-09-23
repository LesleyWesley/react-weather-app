export default function CurrentForecast() {
  return (
    <section className="current-forecast-section">

      <div className="main-widget">
          <div className="main-widget-container">
            <div className="current-info">
                <span className="location preset-4">Berlin, Germany</span>
                <time datetime="2025-09-05" className="preset-6">Tuesday, Aug 5, 2025</time>
            </div>
            <div className="current-temp-section">
                <img src="./src/assets/icon-sunny.webp" alt="Sunny" className="weather-icon"/>
                <span className="current-temp-section preset-1">20°</span>
            </div>
          </div>
      </div>


      <div className="current-details">
          <div className="current-detail-card">
            <h2 className="preset-6">Feels Like</h2>
            <span className="preset-3">18°</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Humidity</h2>
            <span className="preset-3">46%</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Wind</h2>
            <span className="preset-3">14 km/h</span>
          </div>
          <div className="current-detail-card">
            <h2 className="preset-6">Precipitation</h2>
            <span className="preset-3">0 mm</span>
          </div>
      </div>
    </section>
  )
}

//Rendered in the MainSection component
