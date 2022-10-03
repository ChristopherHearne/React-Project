import React from "react";
import { useState } from 'react'

export default function CategoryComponent(){
    const [positiveList, setPositiveList] = useState([])
    const [neutralList, setNeutralList] = useState([])
    const [negativeList, setNegativeList] = useState([])
    
    const onDragging = e => {
        console.log("Now im dragging it over a dropzone")
        e.preventDefault()
    }

    const dropEvent = e => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text/plain")
        if (e.target.className == 'category--list--positive'){
            setPositiveList(arr => [...arr, data])
        }
        else if(e.target.className == 'category--list--neutral'){
            setNeutralList(arr => [...arr, data])
        }
        else if(e.target.className == 'category--list--negative'){
            setNegativeList(arr => [...arr, data])
        }
    }
    return(
        <div className="category--container">
            <div className="positive--container">
                <div className="category--header">
                    <h3>Positive</h3>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div 
                    className="category--list--positive" 
                    onDragOver={onDragging}
                    onDrop={dropEvent}>
                    {
                        positiveList.map((positiveHabit, index) => {
                            return(
                                <div className="category--item--positive" key={index}>
                                    <span className="category--item--name">{positiveHabit}</span>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="neutral--container">
                <div className="category--header">
                    <h3>Neutral</h3>
                    <i className="fa-solid fa-equals"></i>
                </div>
                <div 
                    className="category--list--neutral" 
                    onDragOver={onDragging}
                    onDrop={dropEvent}>
                    {neutralList.map((neutralHabit, index) => {
                        return(
                            <div className="category--item--neutral" key={index}>
                                <span className="category--item--name">{neutralHabit}</span>
                                <i className="fa-solid fa-equals"></i>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="negative--container">
                <div className="category--header">
                    <h3>Negative</h3>
                    <i className="fa-solid fa-minus"></i>
                </div>
                <div 
                    className="category--list--negative" 
                    onDragOver={onDragging}
                    onDrop={dropEvent}>
                    {negativeList.map((negativeHabit, index) => {
                        return(
                            <div className="category--item--negative" key={index}>
                                <span className="category--item--name">{negativeHabit}</span>
                                <i className="fa-solid fa-minus"></i>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}