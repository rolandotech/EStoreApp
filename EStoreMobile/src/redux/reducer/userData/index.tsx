import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface UserData  {
    fname: string,
    lname: string,
    email: string,
    password: string
}

interface UserDataState  {
  userData: UserData,
  isConfirm: boolean
}

const initialState: UserDataState  = {
  userData: {
    fname: '',
    lname: '',
    email: '',
    password: ''
},
  isConfirm: false
}

export const userDataReducer = createSlice({
  name: 'user_data',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload
    },
    setIsConfirm: (state, action: PayloadAction<boolean>) => {
      state.isConfirm = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserData, setIsConfirm } = userDataReducer.actions

export default userDataReducer.reducer