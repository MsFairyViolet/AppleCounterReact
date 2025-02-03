export default function Day({ index, name, day, setDays }) {

    const handleCheckboxChange = (field) => {
        setDays((prevDays) =>
            prevDays.map((d, i) =>
                i === index ? { ...d, [field]: !d[field] } : d
            )
        );
    };

    const fillDay = (index) => {
        setDays((prevDays) => {
            console.log("Before update:", prevDays);
    
            const newDays = prevDays.map((d, i) =>
                i === index ? { ...d, MB: true, ML: true, RB: true, RL: true } : d
            );
    
            console.log("After update:", newDays);
            return newDays;
        });
    };
    

    const clearDay = (index) => {
        setDays((prevDays) =>
            prevDays.map((d, i) =>
                i === index ? { ...d, MB: false, ML: false, RB: false, RL: false} : d
        )
    )
    }

    return (
        <div className="day">
            <h3>{name}</h3>

            <button onClick={() => fillDay(index)}>Fill</button>
            <button onClick={() => clearDay(index)}>Clear</button>

            <div className="checkboxes">
                <label><input type="checkbox" checked={day.MB} onChange={() => handleCheckboxChange("MB")} />M breakfast</label>
                <label><input type="checkbox" checked={day.ML} onChange={() => handleCheckboxChange("ML")} />M lunch</label>
                <label><input type="checkbox" checked={day.RB} onChange={() => handleCheckboxChange("RB")} />R breakfast</label>
                <label><input type="checkbox" checked={day.RL} onChange={() => handleCheckboxChange("RL")} />R lunch</label>
            </div>
        </div>
    )
}