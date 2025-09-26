export default function HourlyCard() {
  return (
    <article className="hourly-card">
      <div className="hourly-content-container">
        <div className="hourly-card-left">
            <img src="./src/assets/icon-overcast.webp" alt="overcast" className="hourly-icon"/>
            <h4 className="preset-5">3 PM</h4>
        </div>
        <span className="preset-7">20°</span>
      </div>
    </article>
  )
}
