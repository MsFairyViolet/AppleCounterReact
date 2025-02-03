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
        <div className="counter">
            <h2>{count}</h2>
            <button onClick={onDecrement}>-</button>
            <input type="number" placeholder="minus" value={inputValue} onChange={handleInputChange} />
            <button onClick={onIncrement}>+</button>
        </div>
    )
}