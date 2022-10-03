import React from "react";
import { useState } from 'react'


// TODO: Gotta make sure item is deleted only when the drop is completed and data is transferred
    // BUG: It marks the headers, should probably use onDrop instead of onDragOver
export default function CategoryComponent(){
    const [positiveList, setPositiveList] = useState([])
    const [neutralList, setNeutralList] = useState([])
    const [negativeList, setNegativeList] = useState([])
    
    const onDragging = e => {
        e.preventDefault()
    }

    const setData = e => {
        e.dataTransfer.setData("text/plain", e.target.innerText)
    }

    const deleteFromCategoryList = (e, index) => {
        console.log(e.target.className)
        if(e.target.className === 'category--item--positive'){
            setPositiveList(positiveList.filter((element) => positiveList[index] !== element))
        }
        else if(e.target.className === 'category--item--neutral'){
            setNeutralList(neutralList.filter((element) => neutralList[index] !== element))
        }
        else if(e.target.className === 'category--item--negative'){
            setNegativeList(negativeList.filter((element) => negativeList[index] !== element))
        }
    }

    const dropEvent = e => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text/plain")
        if (e.target.className === 'category--list--positive'){
            setPositiveList(arr => [...arr, data])
        }
        else if(e.target.className === 'category--list--neutral'){
            setNeutralList(arr => [...arr, data])
        }
        else if(e.target.className === 'category--list--negative'){
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
                                <div className="category--item--positive" 
                                    key={index}
                                    draggable
                                    onDragStart={setData}
                                    onDragEnd={e => deleteFromCategoryList(e, index)}>
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
                            <div className="category--item--neutral" 
                                key={index}
                                draggable
                                onDragStart={setData}
                                onDragEnd={e => deleteFromCategoryList(e, index)}>
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
                    onDrop={dropEvent}
                    onDragOver={onDragging}>
                    {negativeList.map((negativeHabit, index) => {
                        return(
                            <div className="category--item--negative"
                                 key={index}
                                 draggable
                                 onDragStart={setData}
                                 onDragEnd={e => deleteFromCategoryList(e, index)}>
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