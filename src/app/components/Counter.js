export default function Counter({ count, updateCount }) {

    const handleInputChange = (event) => {
        let value = parseFloat(event.target.value)

        if (value < 0) {
            alert("No negative negatives")
            return
        }
        updateCount(value)
    }
    return (
        <div className="counter">
            <h2>{count}</h2>
            <button>-</button>
            <input type="number" placeholder="minus" onChange={handleInputChange} />
            <button>+</button>
        </div>
    )
}