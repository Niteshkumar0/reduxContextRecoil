import {createSlice} from '@reduxjs/toolkit'

export let ModeSlice = createSlice({
    name:'mode',
    initialState:{
        dark:false,
    },
    reducers:{
        lightMode: (state) => {
            if (!state.dark) {
               state.dark = true
            }
            else{
                state.dark = false
            }
        },
        lightModeAction :(state,action) => {
            state.dark += action.payload
        }
    }
})
export let {lightMode,lightModeAction} = ModeSlice.actions
export default ModeSlice.reducer