import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router'; 
import { authService } from '../service/api';
import { ToastContainer, toast } from 'react-toastify';

const OtpVerify = () => {
  const params = useParams().email;
  const [otp, setOtp] = useState(Array(4).fill(""));
  const navigate = useNavigate()

  const handelInput = (item, index) =>{
    let newOtp = [...otp];
    newOtp[index] = item;
    setOtp(newOtp)
  }


  const handleVerify = async (e) =>{
    e.preventDefault()
    try {
      const res = await authService.OtpVerify(params, otp.join(""));
      toast.success(res.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 max-w-md h-auto space-y-4">
        <div className="flex flex-col items-center justify-center relative rounded-xl p-6 bg-white [box-shadow:var(--shadow)] overflow-hidden">
          <h6 className="text-2xl font-bold mb-4">OTP Verification</h6>

           {/* toast message */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={false}
            rtl={false}
            theme="dark"
          />

          {/* ✅ Form starts here */}
          <form className="w-full" onSubmit={handleVerify}>
          <div className="my-6 w-full grid grid-flow-col grid-cols-4 items-center justify-center justify-items-center gap-2">
              {otp.map((item, index) => (
                <input
                  key={index}
                  onChange={(e) => handelInput(e.target.value, index)}
                  className="block placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 rounded-md border border-input bg-white [box-shadow:var(--shadow)] focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#2f81f7]"
                  spellCheck="false"
                  autoComplete="one-time-code"
                  type="tel"
                  inputMode="numeric"
                  maxLength="1"
                />
              ))}
            </div>
            <span className="text-zinc-500 text-[12px] block text-center mb-4">
              Please enter the 4-digits one time password (OTP) that we sent to your registered email
            </span>

            <button
              type="submit"
              className="mt-2 text-base text-white font-medium tracking-wider rounded-md w-full px-4 py-2 transition-colors duration-200 border border-transparent bg-sky-500 hover:bg-sky-600/80"
            >
              Verify
            </button>
          </form>
          {/* ✅ Form ends here */}
        </div>

        <div className="space-y-1 flex flex-col items-center justify-center relative rounded-xl p-4 bg-white [box-shadow:var(--shadow)]">
          <span className="text-sky-600 font-semibold cursor-pointer hover:underline hover:underline-offset-2">
            <Link to="/login">Sign in with a passkey</Link>
          </span>
          <div className="text-sm">
            New user?{' '}
            <span className="text-sky-600 cursor-pointer hover:underline hover:underline-offset-2">
              <Link to="/register">Create an account</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
