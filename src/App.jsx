import { Route, Routes } from 'react-router'
import './App.css'
import AuthLayout from './Layouts/AuthLayout'
import Registration from './Pages/registration'
import ForgetPass from './Pages/forgetPass'
import MainLayouts from './Layouts/MainLayouts'
import Home from './Pages/Home'
import Chat from './Pages/chat'
import Group from './Components/group'
import People from './Components/people'
import OtpVerify from './Pages/otpVerify'
import Login from './Pages/login'

function App() {
  return (
    <>
     <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Registration/>} />
          <Route path='forgot-password' element={<ForgetPass/>}/>
          <Route path='verify-otp/:email' element={<OtpVerify/>}/>
        </Route>
        <Route path="/" element={<MainLayouts />}>
          <Route index  element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/group" element={<Group />} />
          <Route path="/people" element={<People />} />
        </Route>
        <Route path="*" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
