import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="navbar">
                <h1 className="navbar-logo">The Golden Goose</h1>
                <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/user" onClick={() => setIsOpen(false)}>Login</Link>
                </nav>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
}

export default NavBar;

