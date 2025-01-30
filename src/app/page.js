"use client"

import { useState } from "react";
import Day from "./components/Day"
import WeekControl from "./components/WeekControl";
import Counter from "./components/Counter";

export default function Home() {
  const [count, setCount] = useState(0)

  const [days, setDays] = useState([{
    "name": "Wed",
    "MB": true,
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

  const updateCount = (change) => {
    const newCount = 10 - change
    //10 has to be totalChecked later

    if (newCount > 99) {
      alert("Crazy amount of apples")
      return
    }
    setCount(newCount)
  }

  return (
    <div>
      <Counter count={count} updateCount={updateCount} />
      < WeekControl setDays={setDays} />
      {days.map((day) => {
        return <Day name={day.name} MB={day.MB} ML={day.ML} RB={day.RB} RL={day.RL} setDays={setDays} />
      })}

    </div>
  );
}
