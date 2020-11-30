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
                    <NavLink to="/discs" activeStyle>
                        Discs
                    </NavLink>
                    <NavLink to="/gear" activeStyle>
                        Gear
                    </NavLink>
                    <NavLink to="/guides" activeStyle>
                        Guides
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
