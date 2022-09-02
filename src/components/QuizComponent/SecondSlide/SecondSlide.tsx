import React, { useEffect } from "react";
import {
    choseSlide,
    setAnimStatus,
    switchFirstSlide,
    switchSecondSlide,
} from "../../../redux/slice/QuizSlice";
import {
    selectAnimStatusSecond,
    selectApiLanguage,
    selectGameMode,
    selectSecondSlide,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import QuizSlide from "../QuizSlide/QuizSlide";
import s from "./SecondSlide.module.scss";
const SecondSlide = () => {
    const data = useAppSelector(selectSecondSlide);
    const dispatch = useAppDispatch();
    const gameMode = useAppSelector(selectGameMode);
    const animStatus = useAppSelector(selectAnimStatusSecond);
    const lang = useAppSelector(selectApiLanguage);
    useEffect(() => {
        gameMode === "kingMountain" && dispatch(switchSecondSlide());
    }, [lang]);

    const clickKingMount = () => {
        dispatch(setAnimStatus({ status: false, slide: "first" }));
        setTimeout(() => {
            dispatch(switchFirstSlide());
        }, 400);
    };
    const clickClassicMode = () => {
        dispatch(setAnimStatus({ status: false, slide: "second" }));
        dispatch(setAnimStatus({ status: false, slide: "first" }));

        setTimeout(() => {
            dispatch(choseSlide("secondSlide"));
        }, 400);
    };

    const handlerChoseSlide = () => {
        gameMode === "classic" ? clickClassicMode() : clickKingMount();
    };
    if (!data) {
        return null;
    }
    return (
        <div className={s.wrapper}>
            <QuizSlide
                num="second"
                animStatus={animStatus}
                data={data}
                onClick={handlerChoseSlide}
            />
        </div>
    );
};

export default SecondSlide;
