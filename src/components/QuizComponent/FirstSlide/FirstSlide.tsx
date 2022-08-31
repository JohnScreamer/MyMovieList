import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import {
    switchFirstSlide,
    switchSecondSlide,
} from "../../../redux/slice/QuizSlice";
import {
    selectApiLanguage,
    selectFirstSlide,
    selectWinnerSlide,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import QuizSlide from "../QuizSlide/QuizSlide";
import s from "./FirstSlide.module.scss";
const FirstSlide = () => {
    const data = useAppSelector(selectFirstSlide);
    const dispatch = useAppDispatch();
    const lang = useAppSelector(selectApiLanguage);
    useEffect(() => {
        dispatch(switchFirstSlide());
    }, [lang]);

    const handlerChoseSlide = () => {
        dispatch(switchSecondSlide());
    };

    if (!data) {
        return null;
    }

    return (
        <div className={classNames(s.wrapper)}>
            <QuizSlide data={data} onClick={handlerChoseSlide} />
        </div>
    );
};

export default FirstSlide;
