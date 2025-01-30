export default function WeekControl({ setDays }) {
    const setFullWeek = () => {
        setDays([{
            "name": "Wed",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": true,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Sat",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Sun",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Mon",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Tue",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Wed",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": true,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        }])
    }

    const setShortWeek = () => {
        setDays([
            {
            "name": "Wed",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Sat",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Sun",
            "MB": true,
            "ML": true,
            "RB": true,
            "RL": true,
        },
        {
            "name": "Mon",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Tue",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Wed",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": true,
        },
        {
            "name": "Thur",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": true,
            "ML": true,
            "RB": false,
            "RL": false,
        }]

        )
    }

    const clearWeek = () => {
        setDays([{
            "name": "Wed",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Thur",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Sat",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Sun",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Mon",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Tue",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Wed",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Thur",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        },
        {
            "name": "Fri",
            "MB": false,
            "ML": false,
            "RB": false,
            "RL": false,
        }])
    }
    return (
        <div className="week-control">
            <button onClick={setFullWeek}>Full week</button>
            <button onClick={clearWeek}>Clear</button>
            <button onClick={setShortWeek}>Short week</button>
        </div>)
}