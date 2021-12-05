import { combineReducers } from "@reduxjs/toolkit";
import mainReducer from './mainPeducer/index'

export const rootReducer = combineReducers({
    main: mainReducer,
})