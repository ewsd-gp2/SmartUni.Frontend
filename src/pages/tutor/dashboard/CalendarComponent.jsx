import { useState } from "react";
import DatePicker from "react-datepicker";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const dateOnChange = (date) => {
    console.log(date);
    setDate(date);
  };
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={dateOnChange}
        className="w-full bg-gray-50 border border-gray-300"
        inline
      />
    </div>
  );
};

export default CalendarComponent;
