import { Target, Brain, BookOpen, Award } from 'lucide-react'

export const services = [
    {
        id: 'math', name: 'Mathematics Tutoring', price: '$75/hour', deposit: '$25',
        description: 'Algebra, Calculus, Geometry, Statistics',
        icon: Target, color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'science', name: 'Science Tutoring', price: '$80/hour', deposit: '$25',
        description: 'Physics, Chemistry, Biology',
        icon: Brain, color: 'from-green-500 to-emerald-500'
    },
    {
        id: 'english', name: 'English & Writing', price: '$70/hour', deposit: '$25',
        description: 'Essays, Literature, Grammar, Reading Comprehension',
        icon: BookOpen, color: 'from-purple-500 to-pink-500'
    },
    {
        id: 'test-prep', name: 'Test Preparation', price: '$85/hour', deposit: '$30',
        description: 'SAT, ACT, AP Exams, State Tests',
        icon: Award, color: 'from-orange-500 to-red-500'
    },
]

export const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

export const testimonials = [
    { name: 'Sarah M.', grade: 'Grade 11', text: 'My math grades went from C to A+ in just 3 months! The teaching style really clicks with how my brain works.', subject: 'Mathematics', improvement: '+2 letter grades' },
    { name: 'Alex K.', grade: 'Grade 10', text: 'Finally found someone who understands different learning styles. Sessions are engaging and I actually look forward to them!', subject: 'Science', improvement: '85% → 96%' },
    { name: 'Jordan L.', grade: 'Grade 12', text: 'SAT score improved by 240 points! The strategies and personalized approach made all the difference.', subject: 'Test Prep', improvement: '+240 SAT points' },
]
