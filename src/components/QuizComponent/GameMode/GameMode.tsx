import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGameMode } from "../../../redux/slice/QuizSlice";
import { useAppDispatch } from "../../../static/hooks/hooks";
import s from "./GameMode.module.scss";
const GameMode = ({ text, to }: { text: string; to: string }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const handlerClassic = () => {
        dispatch(setGameMode("classic"));
        navigate(`/quiz/${to}`);
    };
    const handlerKing = () => {
        dispatch(setGameMode("kingMountain"));
        navigate(`/quiz/${to}`);
    };
    return (
        <div className={s.wrapper}>
            <button onClick={handlerClassic} className={s.firstSlide}>
                <h3>{t("classic")}</h3>
            </button>
            <h4 className={s.title}>{text}</h4>
            <button onClick={handlerKing} className={s.secondSlide}>
                <h3>{t("kingMount")}</h3>
            </button>
        </div>
    );
};

export default GameMode;
