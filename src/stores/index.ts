import { configureStore } from "@reduxjs/toolkit";
import middleware from "@stores/middlewares";
import reducers from "@stores/reducers";

const store = configureStore({
    middleware: middleware,
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
