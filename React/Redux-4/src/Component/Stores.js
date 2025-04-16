import { configureStore } from "@reduxjs/toolkit";
import slice1reducer from "./Sclicer1";

const store = configureStore({
    reducer : {
       slice1: slice1reducer,
    }
})
export default store;