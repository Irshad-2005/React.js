import {configureStore} from "@reduxjs/toolkit"
import reducer from "../features/todo/todoSlice.js";

export const store = configureStore({
    reducer:reducer
});