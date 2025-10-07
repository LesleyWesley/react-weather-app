import React from "react"

export default function DayDropdownModal() {

  const [selectedDay, setSelectedDay] = React.useState("Tuesday");

  function handleChange(e) {
    const newSelectedDay = e.target.value;
    console.log(newSelectedDay)
  }

  return (
    <form className="day-dropdown-modal" onChange={handleChange}>
      <label>Monday
        <input type="radio" name="dayOfWeek" value="Monday" />
      </label>

      <label>Tuesday
        <input type="radio" name="dayOfWeek" value="Tuesday" defaultChecked={true}/>
      </label>

      <label>Wednesday
        <input type="radio" name="dayOfWeek" value="Wednesday" />
      </label>

      <label>Thursday
        <input type="radio" name="dayOfWeek" value="Thursday" />
      </label>

      <label>Friday
        <input type="radio" name="dayOfWeek" value="Friday" />
      </label>

      <label>Saturday
        <input type="radio" name="dayOfWeek" value="Saturday" />
      </label>

      <label>Sunday
        <input type="radio" name="dayOfWeek" value="Sunday" />
      </label>
    </form>
  )
}

//Rendered in HourlyForecast component
