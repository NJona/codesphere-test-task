import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

export const store = configureStore({
    middleware: middleWares,
    reducer: rootReducer
});