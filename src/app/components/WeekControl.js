import { useState } from "react"

export default function WeekControl({ setDays,  setInputValue }) {

    const [activeButton, setActiveButton] = useState(0)
 const handleClick = (buttonId) => {
        setActiveButton((prevActiveButton) =>
            prevActiveButton === buttonId ? null : buttonId)
    }

    const setFullWeek = () => {
        setDays([{
            "name": "Wed",
            "MB": false,
            "ML": true,
            "RB": false,
            "RL": true,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Sat",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Sun",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Mon",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Tue",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Wed",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": true,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
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
        handleClick(1)
    }

    const setShortWeek = () => {
        setDays([
            {
                "name": "Wed",
                "MB": false,
                "ML": true,
                "RB": false,
                "RL": true,
            },
            {
                "name": "Thur",
                "MB": true,
                "ML": true,
                "RB": false,
                "RL": false,
            },
            {
                "name": "Fri",
                "MB": true,
                "ML": true,
                "RB": true,
                "RL": true,
            },
            {
                "name": "Sat",
                "MB": true,
                "ML": true,
                "RB": true,
                "RL": true,
            },
            {
                "name": "Sun",
                "MB": true,
                "ML": true,
                "RB": true,
                "RL": true,
            },
            {
                "name": "Mon",
                "MB": true,
                "ML": true,
                "RB": false,
                "RL": false,
            },
            {
                "name": "Tue",
                "MB": true,
                "ML": true,
                "RB": false,
                "RL": false,
            },
            {
                "name": "Wed",
                "MB": true,
                "ML": true,
                "RB": false,
                "RL": true,
            },
            {
                "name": "Thur",
                "MB": true,
                "ML": true,
                "RB": false,
                "RL": false,
            },
            {
                "name": "Fri",
                "MB": false,
                "ML": false,
                "RB": false,
                "RL": false,
            }]
        )
        handleClick(2)
    }

    const clearWeek = () => {
        setDays([{
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
    handleClick(0)
    setInputValue("")
    }


    return (
        <div className="week-control">
            <button className={`profile-btn ${activeButton === 1 ? "active" : ""}`} onClick={setFullWeek}>Full week</button>
            <button className="clear-week-btn" onClick={clearWeek}>Clear</button>
            <button className={`profile-btn ${activeButton === 2 ? "active" : ""}`} onClick={setShortWeek}>Short week</button>
        </div>)
}