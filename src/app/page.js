"use client"

import { useState } from "react";
import Day from "./components/Day"
import WeekControl from "./components/WeekControl";
import Counter from "./components/Counter";

export default function Home() {
  const [count, setCount] = useState(0)

  const [days, setDays] = useState([{
    "name": "Wed",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Thur",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Fri",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Sat",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Sun",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Mon",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Tue",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Wed",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Thur",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  },
  {
    "name": "Fri",
    "MB": false,
    "ML": false,
    "RB": false,
    "RL": false,
  }])

  const countCheckedCheckboxes = () => {
    let checkedCheckboxes = days.reduce(
      (total, day) => total + Object.values(day).filter((value) => value === true).length, 0
    )
    console.log("Counted: " + checkedCheckboxes)
    return checkedCheckboxes
  }

  const handleCountClick = () => {
    const totalChecked = countCheckedCheckboxes();
    console.log(totalChecked)
  };



  const updateCount = (change) => {
    const totalChecked = countCheckedCheckboxes();
    const newCount = totalChecked - change

    if (newCount > 99) {
      alert("Crazy amount of apples")
      return
    }
    setCount(newCount)
  }

  return (
    <div>
      <button onClick={handleCountClick}>COUNT!</button>
      <Counter count={count} updateCount={updateCount} />
      < WeekControl setDays={setDays} />
      {days.map((day, index) => {
        return <Day key={index} index={index} name={day.name} day={day} setDays={setDays} />
      })}

    </div>
  );
}
