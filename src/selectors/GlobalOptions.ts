import { RootState } from "../redux/store/store";
export const selectorApiOptions = (state: RootState) =>
    state.globalOptions.apiOptions;

export const selectorTheme = (state: RootState) => state.globalOptions.theme;

export const selectorLanguage = (state: RootState) =>
    state.globalOptions.interfaceLanguage;
export const selectApiLanguage = (state: RootState) =>
    state.globalOptions.apiOptions.language;
export const selectActiveSlide = (state: RootState) =>
    state.globalOptions.activeSlide;
export const selectBurgerStatus = (state: RootState) =>
    state.globalOptions.burgerStatus;
export const selectIsLoadingStatus = (state: RootState) =>
    state.globalOptions.isLoading;
export const selectIsSlideActive = (state: RootState) =>
    state.globalOptions.isSlideActive;
export const selectZoomImg = (state: RootState) => state.globalOptions.zoomImg;
export const selectPortalStatus = (state: RootState) =>
    state.globalOptions.portalStatus;
