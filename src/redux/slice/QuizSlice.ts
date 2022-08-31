import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shuffle } from "../../features/shuffle";
import { GetListItemsType } from "../../Types/GetListType";

export type initialStateType = {
    firstSlide: GetListItemsType | null;
    secondSlide: GetListItemsType | null;
    winnerSlide: GetListItemsType | null;
    slideArray: Array<GetListItemsType>;
};

const initialState: initialStateType = {
    firstSlide: null,
    secondSlide: null,
    winnerSlide: null,
    slideArray: [],
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
} = Quiz.actions;
