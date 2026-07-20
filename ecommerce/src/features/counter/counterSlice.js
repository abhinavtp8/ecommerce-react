import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 10
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer