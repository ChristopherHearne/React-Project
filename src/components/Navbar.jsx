import React from 'react'
import Logo from '../images/logo-squeed-v3.png'
import SignIn from './SignIn'
import { BrowserRouter, Route, Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar--container">
            <div className="navbar--items">
                <img className="navbar--logo" src={Logo} alt="Squeed Logo"></img>
                <div className="navbar--links">
                    <Link to="/">Home</Link>
                    <Link to="/scorecard">Scorecard</Link>
                    <Link to="/stacking">Habit Stacking</Link>
                    <Link to="/manifesto">My Manifesto</Link>
                </div>
            </div>
            <SignIn />
        </nav>
    )
}