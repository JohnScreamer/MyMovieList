import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { KinoList } from "../RTQK/KinoList";
import GlobalOptionsSlice from "../slice/GlobalOptionsSlice";
import QuizSlice from "../slice/QuizSlice";

export const store = configureStore({
    reducer: {
        [KinoList.reducerPath]: KinoList.reducer,
        globalOptions: GlobalOptionsSlice,
        quiz: QuizSlice,
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
