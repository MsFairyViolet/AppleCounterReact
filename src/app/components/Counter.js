export default function Counter({ count, inputValue, setInputValue }) {

    const handleInputChange = (event) => {
        let value = parseFloat(event.target.value)

        if (isNaN(value)) {
            return
        }

        if (value < 0) {
            alert("No negative negatives")
            return
        }
        setInputValue(value)
    }

    const onDecrement = () => {
        let newInputValue = Number(inputValue) - 1
        setInputValue(newInputValue)
        return
    }

    const onIncrement = () => {
        let newInputValue = Number(inputValue) + 1
        setInputValue(newInputValue)
        return
    }

    return (
        <div className="counter-container">
            <div className={`apple-count ${count < 0 || count > 99 ? "error" : ""}`}>
                {count}
            </div>
            <div className="substract-container">
                <button className="plus-btn" onClick={onDecrement}>-</button>
                <input className={`substract-number no-arrows`} type="number" placeholder="minus" value={inputValue} onChange={handleInputChange} />
                <button className="minus-btn" onClick={onIncrement}>+</button>
            </div>
        </div>

    )
}