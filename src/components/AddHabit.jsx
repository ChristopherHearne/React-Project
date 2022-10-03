import React from 'react'
import {useState, useEffect} from 'react'


export default function AddHabit(){
    const [habit, setHabit] = useState('')
    const [habitList, setHabitList] = useState([])
    
    const addHabit = () => {
        setHabitList(arr => [...arr, habit])
    }

    const deleteHabit = (index) => {
        setHabitList(habitList.filter((element) => habitList[index] !== element))
    }

    const handleChange = (event) => {
        setHabit(event.target.value)
    }

    const dragStart = (event) => {
       event.dataTransfer.setData("text/plain", event.target.innerText)
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
                <button className="add--btn" onClick={addHabit}><i className="fa-solid fa-plus"></i></button> 
            </div>
            <div className="habits--container">
                {habitList.map((habit ,index) => {
                    return(
                        <div
                            className="habit--item" 
                            key={index}
                            draggable
                            onDragStart={dragStart}
                            onDragEnd={deleteHabit(index)}>
                            <span
                                className="habit--title">
                                    {habit}
                            </span>
                            <span className="delete--item"
                                key={index}
                                onClick={deleteHabit(index)}>
                                <i 
                                className="fa-solid fa-x"
                                key={index}>
                                </i>
                            </span>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}