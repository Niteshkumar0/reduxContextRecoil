import { configureStore } from '@reduxjs/toolkit'
import ModeReducer from './ModeData'
export let store = configureStore({
    reducer : {
        mode:ModeReducer,
    }
})