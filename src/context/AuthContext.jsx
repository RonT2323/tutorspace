import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const mockUsers = {
    'john@example.com': {
        password: 'password123',
        name: 'John Smith',
        grade: '10',
        subject: 'Mathematics',
        goals: 'Improve algebra skills',
    },
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [authMode, setAuthMode] = useState('login') // 'login' | 'signup'
    const [studentInfo, setStudentInfo] = useState({
        name: '', email: '', subject: '', grade: '', goals: ''
    })

    const handleAuth = ({ email, password, confirmPassword, name }) => {
        if (authMode === 'login') {
            const user = mockUsers[email]
            if (user && user.password === password) {
                setIsLoggedIn(true)
                setStudentInfo({
                    name: user.name, email, subject: user.subject, grade: user.grade, goals: user.goals
                })
                setShowAuthModal(false)
                alert('Login successful!')
            } else {
                alert('Invalid credentials')
            }
        } else {
            if (password !== confirmPassword) {
                alert('Passwords do not match')
                return
            }
            mockUsers[email] = { password, name, grade: '', subject: '', goals: '' }
            setIsLoggedIn(true)
            setStudentInfo({ name, email, subject: '', grade: '', goals: '' })
            setShowAuthModal(false)
            alert('Account created successfully!')
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setStudentInfo({ name: '', email: '', subject: '', grade: '', goals: '' })
    }

    const value = {
        isLoggedIn,
        showAuthModal, setShowAuthModal,
        authMode, setAuthMode,
        studentInfo, setStudentInfo,
        handleAuth, handleLogout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
