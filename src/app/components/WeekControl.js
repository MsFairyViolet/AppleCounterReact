import { useState } from "react"
import { shortWeek, fullWeek, emptyWeek } from "./defaultWeeks"

export default function WeekControl({ setDays, setSubtractValue }) {
    const [activeButton, setActiveButton] = useState(0)
    const handleClick = (buttonId) => {
        setActiveButton((prevActiveButton) =>
            prevActiveButton === buttonId ? null : buttonId)
    }

    const setFullWeek = () => {
        setDays(fullWeek)
        handleClick(1)
    }

    const setShortWeek = () => {
        setDays(shortWeek)
        handleClick(2)
    }

    const clearWeek = () => {
        setDays(emptyWeek)
        handleClick(0)
        setSubtractValue("")
    }
    return (
        <div className="week-control">
            <button className={`profile-btn ${activeButton === 1 ? "active" : ""}`} onClick={setFullWeek}>Full week</button>
            <button className="clear-week-btn" onClick={clearWeek}>Clear</button>
            <button className={`profile-btn ${activeButton === 2 ? "active" : ""}`} onClick={setShortWeek}>Short week</button>
        </div>)
}