export default function Counter({ count, subtractValue, setSubtractValue }) {

    const handleInputChange = (event) => {
        const value = Number(event.target.value)

        if (isNaN(value)) {
            return
        }

        if (value < 0) {
            alert("No negative negatives")
            return
        }
        setSubtractValue(value)
    }

    const onDecrement = () => {
        const newSubtractValue = Number(subtractValue) - 1
        setSubtractValue(newSubtractValue)
        return
    }

    const onIncrement = () => {
        const newSubtractValue = Number(subtractValue) + 1
        setSubtractValue(newSubtractValue)
        return
    }

    return (
        <div className="counter-container">
            <div className={`apple-count ${count < 0 || count > 99 ? "error" : ""}`}>
                {count}
            </div>
            <div className="substract-container">
                <button className="plus-btn" onClick={onDecrement}>-</button>
                <input className={`substract-number no-arrows`} type="number" placeholder="minus" value={subtractValue} onChange={handleInputChange} />
                <button className="minus-btn" onClick={onIncrement}>+</button>
            </div>
        </div>

    )
}