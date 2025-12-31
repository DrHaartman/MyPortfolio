import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">My Portfolio</Link>

                {/* Hamburger Icon (Visible only on Mobile) */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 focus:outline-none"
                    >
                        {/* Simple SVG for Hamburger Icon */}
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu (Hidden on Mobile) */}
                <div className="hidden flex justify-center md:flex space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>

            {/* Mobile Menu (Controlled by State) */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-50 border-t`}>
                <div className="flex flex-col justify-center p-4 space-y-2">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;