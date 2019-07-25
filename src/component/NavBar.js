import React from 'react'
import {Link,withRouter} from 'react-router-dom'
const NavBar = (props) => {
  
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">boketime</a>

                <ul className='right'>
                    <li>
                        <Link to="/Home">Home</Link> </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>

    )
}
export default withRouter(NavBar)