import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const NavLink = ({ to, children }) => {
    const { pathname } = useLocation()
    const active = pathname === to
    return (
        <Link
            to={to}
            className={`font-medium transition-colors ${active ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
        >
            {children}
        </Link>
    )
}

export default function Navbar() {
    const nav = useNavigate()
    const { isLoggedIn, studentInfo, setShowAuthModal, setAuthMode, handleLogout } = useAuth()

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div onClick={() => nav('/')} className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        TutorSpace
                    </div>
                    <div className="flex items-center space-x-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>

                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">Welcome, {studentInfo.name.split(' ')[0] || 'Student'}!</span>
                                <button
                                    onClick={() => nav('/book')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition"
                                >
                                    Book Now
                                </button>
                                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 font-medium">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => { setAuthMode('login'); setShowAuthModal(true) }}
                                    className="text-gray-600 hover:text-gray-900 font-medium"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => nav('/book')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition"
                                >
                                    Book Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
