import React from "react"

export default function DayDropdownModal(props) {

  const [selectedDay, setSelectedDay] = React.useState(props.day);

  const handleChange = (e) => {
    setSelectedDay(e.target.value)
  }


  return (
    <form className="day-dropdown-modal">
      <label>Monday
          <input type="radio" name="dayOfWeek" value="Monday" checked={selectedDay === "Monday"} onChange={handleChange}/>
      </label>
      <label>Tuesday
          <input type="radio" name="dayOfWeek" value="Tuesday" checked={selectedDay === "Tuesday"} onChange={handleChange}/>
      </label>
      <label>Wednesday
          <input type="radio" name="dayOfWeek" value="Wednesday" checked={selectedDay === "Wednesday"} onChange={handleChange}/>
      </label>
      <label>Thursday
          <input type="radio" name="dayOfWeek" value="Thursday" checked={selectedDay === "Thursday"} onChange={handleChange}/>
      </label>
      <label>Friday
          <input type="radio" name="dayOfWeek" value="Friday" checked={selectedDay === "Friday"} onChange={handleChange}/>
      </label>
      <label>Saturday
          <input type="radio" name="dayOfWeek" value="Saturday" checked={selectedDay === "Saturday"} onChange={handleChange}/>
      </label>
      <label>Sunday
          <input type="radio" name="dayOfWeek" value="Sunday" checked={selectedDay === "Sunday"} onChange={handleChange}/>
      </label>


    </form>
  )
}

//Rendered in HourlyForecast component
