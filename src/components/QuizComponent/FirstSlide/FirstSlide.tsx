import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import {
    choseSlide,
    setAnimStatus,
    switchFirstSlide,
    switchSecondSlide,
} from "../../../redux/slice/QuizSlice";
import {
    selectAnimStatusFirst,
    selectApiLanguage,
    selectFirstSlide,
    selectGameMode,
    selectWinnerSlide,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import QuizSlide from "../QuizSlide/QuizSlide";
import s from "./FirstSlide.module.scss";
const FirstSlide = () => {
    const data = useAppSelector(selectFirstSlide);
    const dispatch = useAppDispatch();
    const gameMode = useAppSelector(selectGameMode);
    const lang = useAppSelector(selectApiLanguage);
    const animStatus = useAppSelector(selectAnimStatusFirst);
    useEffect(() => {
        gameMode === "kingMountain" && dispatch(switchFirstSlide());
    }, [lang]);
    const clickKingMount = () => {
        dispatch(setAnimStatus({ status: false, slide: "second" }));
        setTimeout(() => {
            dispatch(switchSecondSlide());
        }, 400);
    };
    const clickClassicMode = () => {
        dispatch(setAnimStatus({ status: false, slide: "second" }));
        dispatch(setAnimStatus({ status: false, slide: "first" }));
        setTimeout(() => {
            dispatch(choseSlide("firstSlide"));
        }, 400);
    };
    const handlerChoseSlide = () => {
        gameMode === "classic" ? clickClassicMode() : clickKingMount();
    };

    if (!data) {
        return null;
    }

    return (
        <div className={classNames(s.wrapper)}>
            <QuizSlide
                data={data}
                onClick={handlerChoseSlide}
                animStatus={animStatus}
                num="first"
            />
        </div>
    );
};

export default FirstSlide;
