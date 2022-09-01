import React from "react";
import { useTranslation } from "react-i18next";
import {
    selectGameMode,
    selectQuizArr,
    selectStage,
    selectWinnerArr,
    selectWinnerSlide,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import s from "./QuizStats.module.scss";

const QuizStats = () => {
    const arr = useAppSelector(selectQuizArr);
    const stage = useAppSelector(selectStage);
    const winner = useAppSelector(selectWinnerSlide);
    const gameMode = useAppSelector(selectGameMode);
    const { t } = useTranslation();

    if (winner) {
        return (
            <div className={s.wrapper}>
                <h3>
                    {t("winner")}: {winner.name ? winner.name : winner.title}
                </h3>
            </div>
        );
    }
    return (
        <div className={s.wrapper}>
            <h3>
                {gameMode === "classic"
                    ? stage === 1
                        ? t("final")
                        : `${t("stage")} 1/${stage}`
                    : ` ${t("nomLeft")} ${arr.length + 2}`}
            </h3>
        </div>
    );
};

export default QuizStats;
