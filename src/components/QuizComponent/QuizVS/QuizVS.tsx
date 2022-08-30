import React from "react";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import s from "./QuizVS.module.scss";
import vs from "./../../../static/img/vs.jpg";
import { useAppSelector } from "../../../static/hooks/hooks";
import { selectWinnerSlide } from "../../../selectors/GlobalOptions";
const QuizVS = () => {
    const winner = useAppSelector(selectWinnerSlide);
    if (winner) {
        return null;
    }
    return <div className={s.wrapper}>VS</div>;
};

export default QuizVS;
