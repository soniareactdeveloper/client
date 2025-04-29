import React from 'react'
import { Link } from 'react-router'

const login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Connect</h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">Login</h2>
       {/* form */}
        <form className="space-y-4">
          {/* email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {/* password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {/* forget password */}
          <div className="flex justify-end text-sm text-blue-600 hover:underline">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md shadow-md hover:opacity-90 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
  </div>
  )
}

export default login