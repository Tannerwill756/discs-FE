import React from 'react'
import { Link } from 'react-router-dom';
import '../css/home.css';

function Home() {
    return (
        <div>
            <header className="homeHeader">
                <h1>Unlock your potential</h1>

                <div className="linkContainer">
                    <Link to="discs" className="headerLinks">Shop Discs</Link>
                    <Link to="guides" className="headerLinks">View Guides</Link>
                </div>

            </header>

            <div className="topPicks">
                <div>
                    picture here
                </div>
            </div>


        </div>
    )
}

export default Home
