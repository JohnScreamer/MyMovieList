import { getLanguage } from "./../../features/getLanguage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTheme, ThemeType } from "../../features/getTheme";
import { getApiLanguage } from "../../features/getApiLanguage";
import { SlideType } from "../../Types/common";

export type ApiOptionType = {
    language: "en-US" | "ru";
    api_key: "48bce37aca39640849c2b1ca0861e9b9";
};
export type BurgerStatusType = "" | "close" | "open";
interface IGlobalOptions {
    theme: "dark" | "light";
    interfaceLanguage: "ua" | "en-US";
    apiOptions: ApiOptionType;
    activeSlide: SlideType | null;
    burgerStatus: BurgerStatusType;
    isLoading: boolean;
    isSlideActive: boolean;
    zoomImg: string;
    portalStatus: boolean;
}

const initialState: IGlobalOptions = {
    theme: getTheme(),
    interfaceLanguage: getLanguage(),
    apiOptions: {
        language: getApiLanguage(),
        api_key: "48bce37aca39640849c2b1ca0861e9b9",
    },
    activeSlide: null,
    burgerStatus: "open",
    isLoading: false,
    isSlideActive: true,
    zoomImg: "",
    portalStatus: false,
};

const GlobalOptionsSlice = createSlice({
    name: "GlobalOptionsSlice",
    initialState,
    reducers: {
        switchTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
        },
        switchLanguage: (state, action: PayloadAction<"en-US" | "ua">) => {
            state.interfaceLanguage = action.payload;
            localStorage.setItem("language", action.payload);
            state.apiOptions.language =
                action.payload === "ua" ? "ru" : action.payload;
            localStorage.setItem(
                "languageApi",
                action.payload === "ua" ? "ru" : action.payload
            );
        },
        setActiveSlide: (state, action: PayloadAction<SlideType>) => {
            state.activeSlide = action.payload;
        },
        setBurgerStatus: (state, action: PayloadAction<BurgerStatusType>) => {
            state.burgerStatus = action.payload;
        },
        setLoadingStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsSlideActive: (state, action: PayloadAction<boolean>) => {
            state.isSlideActive = action.payload;
        },
        setZoomImg: (state, action: PayloadAction<string>) => {
            state.zoomImg = action.payload;
        },
        setPortalStatus: (state, action: PayloadAction<boolean>) => {
            state.portalStatus = action.payload;
        },
    },
});

export default GlobalOptionsSlice.reducer;
export const {
    switchLanguage,
    switchTheme,
    setActiveSlide,
    setBurgerStatus,
    setLoadingStatus,
    setIsSlideActive,
    setZoomImg,
    setPortalStatus,
} = GlobalOptionsSlice.actions;
