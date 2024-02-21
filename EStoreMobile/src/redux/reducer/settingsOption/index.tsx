import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface settingOption {
  settingData: {
    recordPerPage: number,
    searchGlobal: string
  }
}

const initialState: settingOption = {
  settingData: {
    recordPerPage: 10,
    searchGlobal: ''
  },
}

export const settingOptionReducer = createSlice({
  name: 'setting_options',
  initialState,
  reducers: {
    setRecordPerPage: (state, action: PayloadAction<number>) => {
      state.settingData = {...state.settingData, recordPerPage: action.payload}
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.settingData = {...state.settingData, searchGlobal: action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRecordPerPage, setSearch } = settingOptionReducer.actions

export default settingOptionReducer.reducer