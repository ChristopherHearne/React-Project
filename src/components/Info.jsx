import React from "react"
import {useState, useEffect} from 'react'
import { fetchApod } from '../apis/ApodAPI'
import Picture from '../images/react-project-picture.jpeg'


export default function Info(){
    const [apodData, setApod] = useState({})

    useEffect(() => {
       (
        async () => {
            const data = await fetchApod()
            setApod(data)
        }
       )()
    },[])
   
    function handleClick(){
        console.log("Clicked")
    }
    return(
        <div className="info--container">
            <div className="info--text">
                <img src={Picture} className="info--image" alt="Christofer Hearne"></img>
                <h2 className="info--header">Christofer Hearne</h2>
                <h4 className="info--jobtitle">Software Developer Consultant</h4>
                <span className="info--website">christoferhearne.heroku.app</span>
            </div>
            <div className="info--buttons">
                <button className="info--emailbtn" onClick={handleClick}>
                <i class="fa-solid fa-envelope"></i>
                    Email
                </button>   
                <button className="info--linkedbtn" onClick={handleClick}>
                <i id="icon--linkedin"class="fa-brands fa-linkedin"></i>
                    LinkedIn
                </button> 
            </div>
        </div>
    )
}