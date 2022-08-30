import React, { useEffect } from "react";
import {
    switchFirstSlide,
    switchSecondSlide,
} from "../../../redux/slice/QuizSlice";
import { selectSecondSlide } from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import QuizSlide from "../QuizSlide/QuizSlide";
import s from "./SecondSlide.module.scss";
const SecondSlide = () => {
    const data = useAppSelector(selectSecondSlide);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(switchSecondSlide());
    }, []);

    const handlerChoseSlide = () => {
        dispatch(switchFirstSlide());
    };
    if (!data) {
        return null;
    }
    return (
        <div className={s.wrapper}>
            <QuizSlide data={data} onClick={handlerChoseSlide} />
        </div>
    );
};

export default SecondSlide;
