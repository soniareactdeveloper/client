import React from 'react'
import { Link } from 'react-router'

const forgetPass = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-100 to-white">
      
      {/* Form container */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Connect</h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">Forgot Password</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email field */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md hover:opacity-90 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default forgetPass