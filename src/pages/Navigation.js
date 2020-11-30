import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/index.js';
import Navbar from '../components/NavBar/index.js';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </div>
    )
}

export default Navigation
