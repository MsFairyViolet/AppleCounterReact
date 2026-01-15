import type { Day } from "./defaultWeeks";

interface DayProps {
    index: number,
    name: string,
    day: Day,
    setDays: (value: Day[] | ((prev: Day[]) => Day[])) => void
}

export default function Day({ index, name, day, setDays }: DayProps) {

    const handleCheckboxChange = (field: "MB" | "ML" | "RB" | "RL") => {
        setDays((prevDays) =>
            prevDays.map((d, i) =>
                i === index ? { ...d, [field]: !d[field] } : d
            )
        )
    }

    const fillDay = () => {
        setDays((prevDays) => {
            const newDays = prevDays.map((d, i) =>
                i === index ? { ...d, MB: true, ML: true, RB: true, RL: true } : d
            )
            return newDays
        })
    };


    const clearDay = () => {
        setDays((prevDays) =>
            prevDays.map((d, i) =>
                i === index ? { ...d, MB: false, ML: false, RB: false, RL: false } : d
            )
        )
    }

    return (
        <div className="day">
            <div className="day-side">
                {name}
                <button onClick={() => fillDay()}>Fill</button>
                <button onClick={() => clearDay()}>Clear</button>
            </div>

            <div className="checkboxes">
                <label><input className="marieke" type="checkbox" checked={day.MB} onChange={() => handleCheckboxChange("MB")} />M breakfast</label>
                <label><input className="robin" type="checkbox" checked={day.RB} onChange={() => handleCheckboxChange("RB")} />R breakfast</label>
                <label><input className="marieke" type="checkbox" checked={day.ML} onChange={() => handleCheckboxChange("ML")} />M lunch</label>
                <label><input className="robin" type="checkbox" checked={day.RL} onChange={() => handleCheckboxChange("RL")} />R lunch</label>
            </div>
        </div>
    )
}