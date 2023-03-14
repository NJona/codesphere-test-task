import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer, RootState } from "./root-reducer";

const middleWares = [logger];

export const store = configureStore({
    middleware: middleWares,
    reducer: rootReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}