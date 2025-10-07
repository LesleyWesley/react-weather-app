import React from "react"

export default function DayDropdownModal() {

  const [selectedDay, setSelectedDay] = React.useState("Tuesday");


  return (
    <form className="day-dropdown-modal">
      <label>Monday
        <input
          type="radio"
          name="dayOfWeek"
          value="Monday"

        />
      </label>

        <label>Tuesday
          <input
            type="radio"
            name="dayOfWeek"
            value="Tuesday"
            
          />
      </label>


    </form>
  )
}

//Rendered in HourlyForecast component
