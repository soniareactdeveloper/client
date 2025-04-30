import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { authService } from '../service/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BeatLoader } from 'react-spinners'
import { useDispatch } from 'react-redux'
import { LogUser } from '../Slices/AuthSlice'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logData, setlogData] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false) 
  const handleLog = async (e) => {
    e.preventDefault()
    setLoading(true) 
    try {
      const res = await authService.login(logData)
      toast.success(res.message)
      setTimeout(() => {
        navigate("/")
      }, 3000)
      dispatch(LogUser(res.user))
    } catch (error) {
      toast.error(error.response.data.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      {/* toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick={false} rtl={false} theme="dark" />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Connect</h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">Login</h2>
        {/* form */}
        <form className="space-y-4" onSubmit={handleLog}>
          {/* email */}
          <input
            onChange={(e) => setlogData((prev) => ({ ...prev, email: e.target.value }))}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {/* password */}
          <input
            onChange={(e) => setlogData((prev) => ({ ...prev, password: e.target.value }))}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="flex justify-end text-sm text-blue-600 hover:underline">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          
          {/* Spinner or button */}
          {loading ? (
            <div className="flex justify-center w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md shadow-md">
              <BeatLoader color="#000" />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md shadow-md hover:opacity-90 transition-all duration-300"
            >
              Login
            </button>
          )}
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

export default Login
