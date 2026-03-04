import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="list">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="list">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/services" className="link">Services</Link>
                </li>
                <li className="list">
                    <Link to="/state" className="link">useState</Link>
                </li>
                <li className="list">
                    <Link to="/hooks" className="link">Hooks</Link>
                </li>
                <li className="list">
                    <Link to="/login" className="link">Log in</Link>
                </li>
                <li className="list">
                    <Link to="/signup" className="link">Sign up</Link>
                </li>
                {/*Syntax : <Link to="path">Name</Link>*/}
            </ul>
        </nav>
    </div>
  )
}
export default Navbar