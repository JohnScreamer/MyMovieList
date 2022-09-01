import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shuffle } from "../../features/shuffle";
import { GetListItemsType } from "../../Types/GetListType";
export type animationType = {
    status: boolean;
    slide: "first" | "second";
};
export type initialStateType = {
    firstSlide: GetListItemsType | null;
    secondSlide: GetListItemsType | null;
    winnerSlide: GetListItemsType | null;
    slideArray: Array<GetListItemsType>;
    winnerArr: Array<GetListItemsType>;
    isGameStart: boolean;
    gameMode: "classic" | "kingMountain" | null;
    stage: number | null;
    firstSlideAnimationStatus: boolean;
    secondSlideAnimationStatus: boolean;
};

const initialState: initialStateType = {
    firstSlide: null,
    secondSlide: null,
    winnerSlide: null,
    slideArray: [],
    winnerArr: [],
    isGameStart: false,
    gameMode: "classic",
    stage: null,
    firstSlideAnimationStatus: false,
    secondSlideAnimationStatus: false,
};

const Quiz = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        switchFirstSlide: (state) => {
            if (state.slideArray.length) {
                const slide = state.slideArray.splice(0, 1);
                state.firstSlide = slide[0];
                return;
            }
            state.winnerSlide = state.secondSlide;
        },
        switchSecondSlide: (state) => {
            if (state.slideArray.length) {
                const slide = state.slideArray.splice(0, 1);
                state.secondSlide = slide[0];
                return;
            }
            state.winnerSlide = state.firstSlide;
        },
        setWinnerSlide: (state, action) => {},
        setSlideArray: (
            state,
            action: PayloadAction<Array<GetListItemsType>>
        ) => {
            state.slideArray = shuffle(action.payload);
        },
        resetQuiz: (state) => {
            state.firstSlide = null;
            state.secondSlide = null;
            state.winnerSlide = null;
            state.slideArray = [];
            state.winnerArr = [];
            state.isGameStart = false;
        },
        choseSlide: (
            state,
            action: PayloadAction<"firstSlide" | "secondSlide">
        ) => {
            const pickSlide =
                action.payload === "firstSlide"
                    ? state.firstSlide
                    : state.secondSlide;
            if (pickSlide) {
                state.winnerArr = [...state.winnerArr, pickSlide];
            }
            if (state.slideArray.length === 0) {
                // state.winnerArr = [...state.winnerArr, state.slideArray[0]];

                if (state.winnerArr.length === 1) {
                    state.winnerSlide = pickSlide;

                    return;
                }
                state.stage = state.stage ? state.stage / 2 : 0;
                state.slideArray = state.winnerArr.splice(
                    0,
                    state.winnerArr.length
                );
            }

            state.firstSlide = state.slideArray.splice(0, 1)[0];
            state.secondSlide = state.slideArray.splice(0, 1)[0];
        },
        startGame: (state, action: PayloadAction<Array<GetListItemsType>>) => {
            state.slideArray = shuffle(action.payload);

            state.stage = action.payload.length / 2;
            state.isGameStart = true;
        },
        setStartSlide: (state) => {
            state.firstSlide = state.slideArray.splice(0, 1)[0];
            state.secondSlide = state.slideArray.splice(0, 1)[0];
        },
        setGameMode: (
            state,
            action: PayloadAction<"classic" | "kingMountain">
        ) => {
            state.gameMode = action.payload;
        },

        setAnimStatus: (state, action: PayloadAction<animationType>) => {
            if (action.payload.slide === "first") {
                state.firstSlideAnimationStatus = action.payload.status;
                return;
            }
            state.secondSlideAnimationStatus = action.payload.status;
        },
    },
});

export default Quiz.reducer;
export const {
    setSlideArray,
    setWinnerSlide,
    switchFirstSlide,
    switchSecondSlide,
    resetQuiz,
    choseSlide,
    setGameMode,
    setStartSlide,
    startGame,
    setAnimStatus,
} = Quiz.actions;
