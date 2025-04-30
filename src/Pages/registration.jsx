import { Link, useNavigate } from 'react-router'
import { authService } from '../service/api'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners'

const Registration = () => {
  const navigate = useNavigate()
  const [regData, setRegData] = useState({fullname: "", email: "", password: "",});
  const [loading, setLoading] = useState(false)
  

 const handleSubmit = async (e)=>{
  e.preventDefault()
  setLoading(true)
  try {
    const res = await authService.registration(regData);
    toast.success(res.message)
    setTimeout(() => {
      navigate( `/verify-otp/${regData.email}`)
    }, 3000);
  } catch (error) {
    toast.error(error.response.data.error)
  }finally{
    setLoading(false)
  }
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-100 to-white">
      {/* toast message */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Connect</h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">Register</h2>
        
        {/* form area */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* fullname */}
          <input
            onChange={(e)=>setRegData((prev)=>({...prev , fullname: e.target.value}))}
            type="text"
            placeholder="fullname"
            id='fullname'
            // required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
          {/* email */}
          <input
            onChange={(e)=>setRegData((prev)=>({...prev , email: e.target.value}))}
            type="email"
            placeholder="Email"
            id='email'
            // required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
          {/* password */}
          <input
            onChange={(e)=>setRegData((prev)=>({...prev , password: e.target.value}))}
            type="password"
            placeholder="Password"
            // required
            id="password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-300"
          />
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
              Register
            </button>
          )}
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Registration