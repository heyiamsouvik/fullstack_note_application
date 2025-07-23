import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center space-y-6">
        {/* App Name */}
        <h1 className="text-4xl font-bold text-blue-700">Welcome to Notely</h1>
        
        {/* Description */}
        <p className="text-gray-700 text-lg">
          A simple and secure place to store your thoughts, tasks, and ideas. Organize your day and keep your mind clear with NoteNest.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
