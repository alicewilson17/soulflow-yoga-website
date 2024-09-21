import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <Link to={"/"}  className="nav-title"><h2>soulflow yoga.</h2></Link>
            </div>
            <div className="navbar-items">
                <ul>
                    <li>
                        <Link to = {"/classes"} className="navbar-link">classes</Link>
                    </li>
                    <li>
                    <Link to = {"/pricing"} className="navbar-link">pricing</Link>
                    </li>
                    <li>
                    <Link to = {"/contact"} className="navbar-link">contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}