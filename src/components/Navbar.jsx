import React from 'react'
import Logo from '../images/logo-squeed-v3.png'
export default function Navbar(){
    return (
        <nav className="navbar--container">
            <img className="navbar--logo" src={Logo} alt="Squeed Logo"></img>
            <a>Home</a>
            <a>Scorecard</a>
            <a>Habit stacking</a>
            <a>Stats</a>
        </nav> 
    )
}