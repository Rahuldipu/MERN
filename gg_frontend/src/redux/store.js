import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./api/projectApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            projectApi.middleware,
            authApi.middleware,
            userApi.middleware,
        ]),
});
