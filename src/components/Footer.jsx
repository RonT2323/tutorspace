import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            TutorSpace
                        </div>
                        <p className="text-gray-400 mb-4">
                            Transforming education through personalized tutoring that helps every student succeed.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                <span className="text-sm font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                <span className="text-sm font-bold">t</span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                <span className="text-sm font-bold">in</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition">Services</li>
                            <li className="hover:text-white transition">About Me</li>
                            <li className="hover:text-white transition">Testimonials</li>
                            <li className="hover:text-white transition">FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>rondel@tutorspace.com</li>
                            <li>(555) 123-4567</li>
                            <li>Available Mon–Fri</li>
                            <li>9 AM – 8 PM EST</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 TutorSpace. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}
