import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import AuthModal from './AuthModal.jsx'

export default function Layout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Outlet />
            </div>
            <AuthModal />
            <Footer />
        </div>
    )
}
