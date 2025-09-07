import React, { useEffect, useMemo, useState } from 'react'
import { Calendar, CheckCircle } from 'lucide-react'
import { services, availableTimes } from '../data/siteData.js'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function BookingPage() {
    const location = useLocation()
    const { studentInfo, setStudentInfo } = useAuth()

    const [bookingStep, setBookingStep] = useState(1)
    const [selectedServices, setSelectedServices] = useState(location.state?.preselect || [])
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '', name: '' })

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [bookingStep])

    const toggleServiceSelection = (id) => {
        setSelectedServices((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
    }

    const { totalHourly, totalDeposit } = useMemo(() => {
        const selected = services.filter(s => selectedServices.includes(s.id))
        const totalHourly = selected.reduce((sum, s) => sum + parseInt(s.price.replace('$', '').replace('/hour', '')), 0)
        const totalDeposit = selected.reduce((sum, s) => sum + parseInt(s.deposit.replace('$', '')), 0)
        return { totalHourly, totalDeposit }
    }, [selectedServices])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Book Your Session
                    </h1>
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        {[1, 2, 3, 4].map(step => (
                            <div key={step} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${bookingStep >= step ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                    {bookingStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                                </div>
                                {step < 4 && <div className={`w-16 h-1 mx-2 ${bookingStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'}`}></div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    {/* Step 1 */}
                    {bookingStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Subjects</h2>
                            <p className="text-gray-600 mb-6">Select one or more subjects for your tutoring sessions:</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {services.map((s) => {
                                    const Icon = s.icon
                                    const active = selectedServices.includes(s.id)
                                    return (
                                        <div key={s.id}
                                            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${active ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
                                            onClick={() => toggleServiceSelection(s.id)}>
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center text-white`}>
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2">
                                                        <h3 className="font-bold text-gray-900">{s.name}</h3>
                                                        {active && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{s.description}</p>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="font-bold text-gray-900">{s.price}</span>
                                                        <span className="text-sm text-gray-500">Deposit: {s.deposit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {selectedServices.length > 0 && (
                                <div className="bg-blue-50 rounded-2xl p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Selected Services Summary</h3>
                                    <div className="space-y-2">
                                        {selectedServices.map(id => {
                                            const s = services.find(x => x.id === id)
                                            return (
                                                <div key={id} className="flex justify-between items-center">
                                                    <span className="text-sm">{s.name}</span>
                                                    <span className="text-sm font-medium">{s.price}</span>
                                                </div>
                                            )
                                        })}
                                        <div className="border-t pt-2 mt-2">
                                            <div className="flex justify-between font-bold">
                                                <span>Total per Session:</span>
                                                <span>${totalHourly}/hour</span>
                                            </div>
                                            <div className="flex justify-between font-bold text-blue-600">
                                                <span>Total Deposit Required:</span>
                                                <span>${totalDeposit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={() => setBookingStep(2)}
                                disabled={selectedServices.length === 0}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                            >
                                Continue to Date & Time
                            </button>
                        </div>
                    )}

                    {/* Step 2 */}
                    {bookingStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Choose a Date</h3>
                                    <div className="bg-gray-50 rounded-2xl p-4">
                                        <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                        <input
                                            type="date"
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Available Times</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                        {availableTimes.map((t) => (
                                            <button key={t}
                                                onClick={() => setSelectedTime(t)}
                                                className={`p-3 rounded-xl text-sm font-medium transition ${selectedTime === t ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={() => setBookingStep(1)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-300">Back</button>
                                <button
                                    onClick={() => setBookingStep(3)}
                                    disabled={!selectedDate || !selectedTime}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                                >
                                    Continue to Details
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {bookingStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Enter student name"
                                        value={studentInfo.name}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Enter email address"
                                        value={studentInfo.email}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, email: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Grade</label>
                                    <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        value={studentInfo.grade}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, grade: e.target.value })}>
                                        <option value="">Select grade</option>
                                        {[6, 7, 8, 9, 10, 11, 12].map(g => <option key={g} value={g}>Grade {g}</option>)}
                                        <option value="college">College</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Specific Subject Area</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="e.g., Algebra 2, AP Chemistry"
                                        value={studentInfo.subject}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, subject: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Learning Goals</label>
                                <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32"
                                    placeholder="What would you like to achieve? Any specific challenges or areas of focus?"
                                    value={studentInfo.goals}
                                    onChange={(e) => setStudentInfo({ ...studentInfo, goals: e.target.value })} />
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={() => setBookingStep(2)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-300">Back</button>
                                <button
                                    onClick={() => setBookingStep(4)}
                                    disabled={!studentInfo.name || !studentInfo.email || !studentInfo.grade}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4 */}
                    {bookingStep === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Secure Payment</h2>

                            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Services:</span>
                                        <div className="text-right">
                                            {selectedServices.map(id => {
                                                const s = services.find(x => x.id === id)
                                                return <div key={id} className="font-medium">{s.name}</div>
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Date & Time:</span>
                                        <span className="font-medium">{selectedDate} at {selectedTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Student:</span>
                                        <span className="font-medium">{studentInfo.name}</span>
                                    </div>
                                    <div className="border-t pt-2 mt-2">
                                        <div className="flex justify-between font-bold">
                                            <span>Total Deposit Required:</span>
                                            <span>${totalDeposit}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 text-xs mt-1">
                                            <span>Session Rate:</span>
                                            <span>${totalHourly}/hour</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="1234 5678 9012 3456"
                                        value={paymentInfo.cardNumber}
                                        onChange={(e) => {
                                            const raw = e.target.value.replace(/\s/g, '').replace(/\D/g, '')
                                            const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ')
                                            if (raw.length <= 16) setPaymentInfo({ ...paymentInfo, cardNumber: formatted })
                                        }}
                                        maxLength={19}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Name on card"
                                        value={paymentInfo.name}
                                        onChange={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="MM/YY"
                                        value={paymentInfo.expiry}
                                        onChange={(e) => {
                                            const v = e.target.value.replace(/\D/g, '')
                                            let out = v
                                            if (v.length >= 2) out = v.slice(0, 2) + '/' + v.slice(2, 4)
                                            if (v.length <= 4) setPaymentInfo({ ...paymentInfo, expiry: out })
                                        }}
                                        maxLength={5}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        placeholder="123"
                                        value={paymentInfo.cvv}
                                        onChange={(e) => {
                                            const v = e.target.value.replace(/\D/g, '')
                                            if (v.length <= 4) setPaymentInfo({ ...paymentInfo, cvv: v })
                                        }}
                                        maxLength={4}
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={() => setBookingStep(3)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-300">Back</button>
                                <button
                                    onClick={() => {
                                        alert('Booking confirmed! You will receive a confirmation email shortly.')
                                        window.location.href = '/'
                                    }}
                                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg"
                                >
                                    Complete Booking
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
