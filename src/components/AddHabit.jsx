import React from 'react'
import {useState, useEffect} from 'react'

export default function AddHabit(){
    const [habit, setHabit] = useState('')
    const [habitList, setHabitList] = useState([])
    function addHabit(){
        const habitElement = <div className="habit--item" key={habitList.length}>
                                <span className="habit--title">{habit}</span>
                            </div>
        setHabitList(habitList.concat(habitElement))
    }

    const handleChange = event => {
        setHabit(event.target.value)
    }
    return(
        <div className="add--habit--container">
            <div className="input--container">
                <input 
                    className="input--text"
                    type="text" 
                    placeholder="Add a habit..."
                    value={habit}
                    onChange={handleChange}
                />
                <button className="add--btn" onClick={addHabit}>Add</button> 
            </div>
            <div className="habits--container">
                {habitList}
            </div>
        </div>
    )
}