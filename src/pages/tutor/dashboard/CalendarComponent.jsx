import React, { useState } from 'react'
import Calendar from 'react-calendar';


const CalendarComponent = () => {
  const [date,setDate]= useState(new Date())
  const dateOnChange = (date) => {
    console.log(date);
    setDate(date)
  }
  return (

    <div>
      <Calendar onChange={dateOnChange} value={date}/>
    </div>
  )
}

export default CalendarComponent