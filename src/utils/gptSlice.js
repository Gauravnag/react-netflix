import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        gptResult: false,
    },
    reducers: {
        addGpt: (state, action) => {
            state.gptResult = !state.gptResult
        }
    }
})

export const {addGpt} = gptSlice.actions;
export default gptSlice.reducer;