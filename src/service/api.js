import axios from 'axios';



const api = axios.create ({
  baseURL :import.meta.env.VITE_API_URL,
  headers : {
    "Content-Type" : "application/json",
  }
})

export const authService = {
  registration : async (userData)=>{
    const res = await api.post("/auth/register", userData)
    return res.data
  },
  OtpVerify: async (email, otp) => {
    const res = await api.post('/auth/verifyemail',{ email, otp})
    return res.data
  },
  login: async (userData) => {
    const res = await api.post("/auth/login", userData)
    if (res.data.access_token) {
      localStorage.setItem("user", JSON.stringify(res.data.user))
      localStorage.setItem("token", res.data.access_token)
    }
    return res.data
  }
  
}