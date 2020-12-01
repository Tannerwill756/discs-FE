import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>                
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>

                <Bars onClick={toggle}/>

                <NavMenu>
                    <NavLink to="/discs" activestyle={NavLink ? 1 : 0}>
                        Discs
                    </NavLink>
                    <NavLink to="/gear" activestyle ={NavLink ? 1 : 0}>
                        Gear
                    </NavLink>
                    <NavLink to="/guides" activestyle={NavLink ? 1 : 0}>
                        Guides
                    </NavLink>
                    <NavLink to="/sign-up" activestyle={NavLink ? 1 : 0}>
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
