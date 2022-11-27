import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user')=== null||'undefined'?'user':localStorage.getItem('user')
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
    //   set the user in the localstorage first then update the state
    localStorage.setItem('user', JSON.stringify('admin'));
    state.user='admin';
    },
    logout: (state) => {
    localStorage.setItem('user', JSON.stringify('user'));
    state.user='user';
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions
export default authSlice.reducer