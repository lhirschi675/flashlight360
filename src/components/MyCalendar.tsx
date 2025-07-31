import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div>
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) {
            setDate(value);
          }
        }}
        value={date}
      />
      <p>Selected Date: {date ? date.toDateString() : "None"}</p>
    </div>
  );
};

export default MyCalendar;
