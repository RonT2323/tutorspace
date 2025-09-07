import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function AuthModal() {
    const { showAuthModal, setShowAuthModal, authMode, setAuthMode, handleAuth } = useAuth()
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', name: '' })

    if (!showAuthModal) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {authMode === 'login' ? 'Welcome Back!' : 'Create Account'}
                    </h2>
                    <p className="text-gray-600">
                        {authMode === 'login' ? 'Sign in to your account' : 'Join TutorSpace today'}
                    </p>
                </div>

                <div className="space-y-4">
                    {authMode === 'signup' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                placeholder="Enter your full name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>

                    {authMode === 'signup' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                placeholder="Confirm your password"
                                value={form.confirmPassword}
                                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            />
                        </div>
                    )}

                    {authMode === 'login' && (
                        <div className="bg-blue-50 rounded-xl p-4">
                            <p className="text-sm text-blue-800 mb-2">Demo Account:</p>
                            <p className="text-xs text-blue-600">Email: john@example.com</p>
                            <p className="text-xs text-blue-600">Password: password123</p>
                        </div>
                    )}
                </div>

                <div className="flex space-x-3 mt-6">
                    <button
                        onClick={() => setShowAuthModal(false)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleAuth(form)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg"
                    >
                        {authMode === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <button
                        onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                        {authMode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </div>
    )
}
