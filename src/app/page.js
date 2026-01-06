"use client"

import { useState, useEffect } from "react";
import Day from "./components/Day"
import WeekControl from "./components/WeekControl";
import Counter from "./components/Counter";
import { emptyWeek } from "./components/defaultWeeks";

export default function Home() {
  const [count, setCount] = useState(0)
  const [subtractValue, setSubtractValue] = useState("")

  const [days, setDays] = useState(emptyWeek)

  const countCheckedCheckboxes = () => {
    let checkedCheckboxes = days.reduce(
      (total, day) => total + Object.values(day).filter((value) => value === true).length, 0
    )
    return checkedCheckboxes
  }

  const updateCount = () => {
    const totalChecked = countCheckedCheckboxes();

    const inputNumber = Number(subtractValue) || 0

    if (inputNumber < 0){
      alert("Substraction can not be negative")
      setSubtractValue("0")
    }
    
    const newCount = totalChecked - inputNumber

    setCount(newCount)
  }

  useEffect(() => {
    updateCount()
  }, [days, subtractValue])

  return (
    <div className="page">
      <Counter count={count} updateCount={updateCount} subtractValue={subtractValue} setSubtractValue={setSubtractValue} />
      < WeekControl setDays={setDays} setSubtractValue={setSubtractValue} />
      <div className="days-container">
        {days.map((day, index) => {
          return <Day key={index} index={index} name={day.name} day={day} setDays={setDays} />
        })}
      </div>
    </div>
  );
}
