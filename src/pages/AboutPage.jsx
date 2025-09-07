import React from 'react'
import { User, BookOpen, Brain, Award } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Meet Your Tutor
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passionate about making learning accessible, engaging, and effective for every student
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hi, I'm Rondel!</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                With over 8 years of experience in education and a deep understanding of different learning styles,
                                I've helped hundreds of students discover their potential and achieve academic success.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Every student learns differently. I focus on specialized techniques that make learning engaging,
                                interactive, and memorable for all types of learners.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                My approach combines visual learning, gamification, and positive reinforcement to keep students motivated.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1">
                            <div className="bg-white rounded-3xl p-8">
                                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <User className="w-16 h-16 text-white" />
                                </div>
                                <div className="text-center space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Rondel Thorpe</h3>
                                    <p className="text-gray-600">M.Ed. Mathematics Education</p>
                                    <div className="flex justify-center space-x-4 text-sm text-gray-500">
                                        <span>8+ Years Experience</span><span>•</span><span>Learning Specialist</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600 text-sm">Students Helped</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                                <div className="text-gray-600 text-sm">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Qualifications */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qualifications & Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Education</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>M.Ed. Mathematics Education</li>
                                <li>B.S. Applied Mathematics</li>
                                <li>Learning Specialist Certification</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Brain className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Specializations</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>Personalized Learning Strategies</li>
                                <li>Visual & Kinesthetic Teaching</li>
                                <li>Study Skills & Organization</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Achievements</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>Outstanding Educator Award 2023</li>
                                <li>Learning Excellence Recognition</li>
                                <li>500+ Success Stories</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's work together to unlock your academic potential.
                    </p>
                    <a href="/book" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition">
                        Schedule Your First Session
                    </a>
                </div>
            </div>
        </div>
    )
}
