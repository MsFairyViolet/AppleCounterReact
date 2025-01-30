import { useState } from "react"

export default function Counter({ count, updateCount }) {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        let value = parseFloat(event.target.value)

        if (value < 0) {
            alert("No negative negatives")
            return
        }
        updateCount(value)
        setInputValue(value)
    }

    const onDecrement = () => {
        let newInputValue = Number(inputValue) - 1
        setInputValue(newInputValue)
        updateCount(newInputValue)
        return
    }

    const onIncrement = () => {
        let newInputValue = Number(inputValue) + 1
        setInputValue(newInputValue)
        updateCount(newInputValue)
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