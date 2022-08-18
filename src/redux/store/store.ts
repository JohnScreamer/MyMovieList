import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { KinoList } from "../RTQK/KinoList";
import GlobalOptionsSlice from "../slice/GlobalOptionsSlice";

export const store = configureStore({
    reducer: {
        [KinoList.reducerPath]: KinoList.reducer,
        globalOptions: GlobalOptionsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(KinoList.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
