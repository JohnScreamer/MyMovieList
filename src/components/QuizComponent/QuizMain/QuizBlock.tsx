import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import GameMode from "../GameMode/GameMode";
import s from "./QuizMain.module.scss";
type QuizType = {
    movie: string;
    text: string;
    to:string;
};
const QuizBlock: FC<QuizType> = ({ movie, text,to }) => {
    const [gameMode, setGameMode] = useState(false);
    return (
        <div className={s.button} onClick={() => setGameMode(true)}>
            <LazyLoadImg src={movie} />

            {gameMode ? <GameMode to={to} text={text} /> : <h2>{text}</h2>}
        </div>
    );
};

export default QuizBlock;
