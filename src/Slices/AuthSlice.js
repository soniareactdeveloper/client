import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    value: JSON.parse(localStorage.getItem("user")) || null
  },
  reducers: {
    LogUser: (state, action) => {
      state.value = action.payload
    },
    logOutUser: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { LogUser, logOutUser } = AuthSlice.actions

export default AuthSlice.reducer