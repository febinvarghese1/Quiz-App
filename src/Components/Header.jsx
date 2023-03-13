import React from 'react'
import {GiBrain} from "react-icons/gi"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            
            <h1>QuiZapp</h1>
            <i><GiBrain /></i>
        </div>
        <div className="header__right">
            <NavLink to="/">
                <span>Home</span>
            </NavLink>
            <NavLink to="/CreateQuiz">
                <span>Create a Quiz</span>
            </NavLink>
            <NavLink to="/about">
                <span>About Us</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Header