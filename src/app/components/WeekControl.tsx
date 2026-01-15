import { useEffect } from "react"
import { shortWeek, emptyWeek } from "./defaultWeeks"
import type { Day } from "./defaultWeeks"

interface WeekControlProps {
    setDays: (value: Day[] | ((prev: Day[]) => Day[])) => void,
    setSubtractValue: (value: number | "") => void
}

export default function WeekControl({ setDays, setSubtractValue }: WeekControlProps) {

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