export default function Day({name, MB, ML, RB, RL}) {
    return (
        <div className="day">
            <h3>{name}</h3>

            <button>Fill</button>
            <button>Clear</button>

            <div className="checkboxes">
            <input type="checkbox" checked={MB}/><label>M breakfast</label>
            <input type="checkbox" checked={ML}/><label>M lunch</label>
            <input type="checkbox" checked={RB}/><label>R breakfast</label>
            <input type="checkbox" checked={RL}/><label>R lunch</label>
        </div>
        </div>
    )
}