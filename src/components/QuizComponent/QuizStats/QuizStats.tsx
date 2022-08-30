import React from "react";
import {
    selectQuizArr,
    selectWinnerSlide,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import s from "./QuizStats.module.scss";

const QuizStats = () => {
    const arr = useAppSelector(selectQuizArr);
    const winner = useAppSelector(selectWinnerSlide);
    if (winner) {
        return (
            <div className={s.wrapper}>
                <h3>Winner: {winner.name ? winner.name : winner.title}</h3>
            </div>
        );
    }
    return (
        <div className={s.wrapper}>
            <h3>Nominees left:{arr.length + 2}</h3>
        </div>
    );
};

export default QuizStats;
