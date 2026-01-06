import { useEffect, useState } from "react"
import { shortWeek, fullWeek, emptyWeek } from "./defaultWeeks"

export default function WeekControl({ setDays, setSubtractValue }) {

    const setShortWeek = () => {
        setDays(shortWeek)
    }

    const clearWeek = () => {
        setDays(emptyWeek)
        setSubtractValue("")
    }

    useEffect(() => {
        setShortWeek()
    }, [])

    return (
        <div className="week-control">
            <button className="profile-btn" onClick={setShortWeek}>Short week</button>
            <button className="clear-week-btn" onClick={clearWeek}>Clear</button>
        </div>)
}