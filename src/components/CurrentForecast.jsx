export default function CurrentForecast() {
  return (
    <section className="current-forecast-section">
    //Code for Main Widget
      <div className="main-widget">
          <div className="current-info">
              <h2 className="location">Berlin, Germany</h2>
              <time datetime="2025-09-05">Tuesday, Aug 5, 2025</time>
          </div>
          <div className="current-temp-section">
              <img src="./src/assets/icon-sunny.webp" alt="Sunny" />
              <span className="current-temp-section">20°</span>
          </div>
      </div>

      //Code for Current Details section
      <div className="current-details">
          <div className="current-detail-card">
            <h3>Feels Like</h3>
            <span className="current-data">18°</span>
          </div>
          <div className="current-detail-card">
            <h3>Humidity</h3>
            <span className="current-data">46%</span>
          </div>
          <div className="current-detail-card">
            <h3>Wind</h3>
            <span className="current-data">14 km/h</span>
          </div>
          <div className="current-detail-card">
            <h3>Precipitation</h3>
            <span className="current-data">0 mm</span>
          </div>
      </div>
    </section>
  )
}

//Rendered in the MainSection component
