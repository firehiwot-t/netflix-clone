import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] =useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [handleShow]);
    return (
    <div className={`nav ${show && "nav__black" }`}>
        <img
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        />
        <img
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar logo"
        />
    
    
    
    </div>
  )
}

export default Nav