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
export const selectFirstSlide = (state: RootState) => state.quiz.firstSlide;
export const selectSecondSlide = (state: RootState) => state.quiz.secondSlide;
export const selectQuizArr = (state: RootState) => state.quiz.slideArray;
export const selectWinnerSlide = (state: RootState) => state.quiz.winnerSlide;
export const selectGameMode = (state: RootState) => state.quiz.gameMode;
export const selectIsGameStart = (state: RootState) => state.quiz.isGameStart;
export const selectWinnerArr = (state: RootState) => state.quiz.winnerArr;
export const selectStage = (state: RootState) => state.quiz.stage;
export const selectISFinale = (state: RootState) => state.quiz.isFinal;
export const selectAnimStatusFirst = (state: RootState) =>
    state.quiz.firstSlideAnimationStatus;
export const selectAnimStatusSecond = (state: RootState) =>
    state.quiz.secondSlideAnimationStatus;
