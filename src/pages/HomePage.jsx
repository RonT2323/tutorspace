import React from 'react'
import { ArrowRight, Play, Star, User, Zap } from 'lucide-react'
import { services, testimonials } from '../data/siteData.js'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const nav = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Engaging & Effective Learning</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                        Transform Your<br />Academic Journey
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Personalized tutoring that adapts to how you learn best.
                        Engaging, interactive, and designed for real results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <button
                            onClick={() => nav('/book')}
                            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                        >
                            <span>Start Learning Today</span>
                            <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => nav('/about')}
                            className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition"
                        >
                            <Play className="w-5 h-5 inline mr-2" />
                            <span>Meet Your Tutor</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Subjects That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Click</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Specialized tutoring with teaching methods that keep students engaged and motivated
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div key={service.id}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition border border-gray-100">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                                        <div className="text-sm text-gray-500">Deposit: {service.deposit}</div>
                                    </div>
                                    <button
                                        onClick={() => nav('/book', { state: { preselect: [service.id] } })}
                                        className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition text-sm font-medium"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">Real students, real results, real transformation</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="flex items-center mb-4">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                    </div>
                                    <span className="ml-auto bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                                        {t.improvement}
                                    </span>
                                </div>
                                <p className="text-white mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-semibold text-white">{t.name}</div>
                                        <div className="text-blue-200 text-sm">{t.grade} • {t.subject}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excel</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join hundreds of students who've transformed their academic performance.
                </p>
                <button
                    onClick={() => nav('/book')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                >
                    Book Your First Session
                </button>
            </div>
        </div>
    )
}
