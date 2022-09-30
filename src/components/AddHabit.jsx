import React from 'react'
import {useState, useEffect} from 'react'

export default function AddHabit(){
    return(
        <div className="container">
            <div className="input--container">
                <input type="text" placeholder="Add a habit..."></input>
            </div>
            <div className="habits--container">
                <div className="habits--items">

                </div>
            </div>
        </div>


    )
}