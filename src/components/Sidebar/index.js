import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements.js';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="discs" onClick={toggle}>
                        Discs
                    </SidebarLink>

                    <SidebarLink to="gear" onClick={toggle}>
                        Gear
                    </SidebarLink>

                    <SidebarLink to="guides" onClick={toggle}>
                        Guides
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
