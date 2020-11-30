import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>                
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>

                <Bars />

                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        about
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        contact us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        sign up
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>                            
            </Nav>
        </>
    )
}

export default Navbar
