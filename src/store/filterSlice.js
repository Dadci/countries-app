import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        countries: [],
        regionFilter: ''
    },
    reducers: {
        setRegionFilter: (state, action) => {
            state.regionFilter = action.payload
        },
        setCountries: (state, action) => {
            state.countries = action.payload
        }
    }
})

export const { setRegionFilter, setCountries } = filterSlice.actions
export default filterSlice.reducer