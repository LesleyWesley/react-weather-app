import React from "react"

export default function DayDropdownModal() {

  const [selectedDay, setSelectedDay] = React.useState("Tuesday");


  return (
    <form className="day-dropdown-modal">
      <select name="dayOfWeek">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
      </select>


    </form>
  )
}

//Rendered in HourlyForecast component
