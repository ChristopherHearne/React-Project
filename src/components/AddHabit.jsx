import React from 'react'
import {useState, useEffect} from 'react'

export default function AddHabit(){
    return(
        <div className="add--habit--container">
            <div className="input--container">
                <input type="text" placeholder="Add a habit..."></input>
                <button>Add</button> 
            </div>
            <div className="habits--container">
                <div className="habit--item">
                    <span className="habit--title">Smoke</span>
                </div>
            </div>
        </div>
    )
}