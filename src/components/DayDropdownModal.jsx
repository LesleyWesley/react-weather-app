export default function DayDropdownModal() {


  return (
    <fieldset className="day-dropdown-modal">
      <label>Monday
        <input type="radio" name="dayOfWeek" value="monday" />
      </label>

      <label>Tuesday
        <input type="radio" name="dayOfWeek" value="tuesday" defaultChecked={true}/>
      </label>

      <label>Wednesday
        <input type="radio" name="dayOfWeek" value="wednesday" />
      </label>

      <label>Thursday
        <input type="radio" name="dayOfWeek" value="thursday" />
      </label>

      <label>Friday
        <input type="radio" name="dayOfWeek" value="friday" />
      </label>

      <label>Saturday
        <input type="radio" name="dayOfWeek" value="saturday" />
      </label>

      <label>Sunday
        <input type="radio" name="dayOfWeek" value="sunday" />
      </label>

    </fieldset>
  )
}

//Rendered in HourlyForecast component
