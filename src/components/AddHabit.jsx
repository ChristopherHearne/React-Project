import React from 'react'
import {useState, useEffect} from 'react'
import { postHabit, destroyHabit } from '../API'


export default function AddHabit(){
    const [habit, setHabit] = useState('')
    const [habitList, setHabitList] = useState([])
    
    const addHabit = async () => {
        const activeUser = JSON.parse(localStorage.getItem('user')).email
        const habitInfo = await postHabit(activeUser, habit)
        console.log(habitInfo)
        setHabitList(arr => [...arr, habitInfo])
        console.log(habitList)
        setHabit('')
    }

    // TODO: This is going to create a bug where the habits with the same title is going to be deleted in the DOM but not in the DB
    const deleteHabit = async (index, id) => {
        const requestInfo = await destroyHabit(id)
        console.log(requestInfo)
        setHabitList(habitList.filter((element) => habitList[index] !== element))
    }

    const handleChange = (event) => {
        setHabit(event.target.value)
    }

    const dragStart = (event, index) => {
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
                            onDragEnd={event => deleteHabit(index, habit.id)}>
                            <span
                                className="habit--title">
                                    {habit.title}
                            </span>
                            <span className="delete--item"
                                key={index}
                                onClick={event => deleteHabit(index, habit.id)}>
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