import React from 'react'
import {useState, useEffect} from 'react'


// TODO: Use list.map() instead of a concat version in addHabit. map the list of elements in the return statement instead. Just push the habit-title to the list then display. 
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