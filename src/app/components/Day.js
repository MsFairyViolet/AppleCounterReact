export default function Day({ index, name, day, setDays}) {

    const handleCheckboxChange = (field) => {
        setDays((prevDays) =>
            prevDays.map((d, i) =>
                i === index ? { ...d, [field]: !d[field] } : d
            )
        );
    };

    return (
        <div className="day">
            <h3>{name}</h3>

            <button>Fill</button>
            <button>Clear</button>

            <div className="checkboxes">
                <input type="checkbox" checked={day.MB} onChange={() => handleCheckboxChange("MB")} /><label>M breakfast</label>
                <input type="checkbox" checked={day.ML} onChange={() => handleCheckboxChange("ML")} /><label>M lunch</label>
                <input type="checkbox" checked={day.RB} onChange={() => handleCheckboxChange("RB")} /><label>R breakfast</label>
                <input type="checkbox" checked={day.RL} onChange={() => handleCheckboxChange("RL")} /><label>R lunch</label>
            </div>
        </div>
    )
}