import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer : {},
})
export default counterSlice.reducer;