import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()
    const changeBackground = () => {

        if (window.scrollY >= 90) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <div className={navbar ? "nav nav_black" : "nav"}>
            <div className='nav_content'>
                <NavLink to="/">
                    <img
                        className="nav_logo"
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="Netflix Logo"
                    />
                </NavLink>

                <img
                    onClick={() => navigate("/profiles")}
                    className="user"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="user"
                />

            </div>

        </div >
    );
}

export default Nav