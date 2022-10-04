import React from 'react'
import Logo from '../images/logo-squeed-v3.png'
import SignIn from './SignIn'
export default function Navbar() {
    return (
        <nav className="navbar--container">
            <div className="navbar--items">
                <img className="navbar--logo" src={Logo} alt="Squeed Logo"></img>
                <div className="navbar--links">
                    <a>Home</a>
                    <a>Scorecard</a>
                    <a>Habit stacking</a>
                    <a>My Manifesto</a>
                </div>
            </div>
            <SignIn />
        </nav>
    )
}