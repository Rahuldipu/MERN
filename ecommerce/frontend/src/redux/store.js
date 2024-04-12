import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";

import { productApi } from "./api/productsAPI";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { orderApi } from "./api/orderAPI";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: userReducer,
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            authApi.middleware,
            userApi.middleware,
            orderApi.middleware,
        ]),
});
