import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Img } from "../../UI/Img/ImgWrapper";
import s from "./QuizMain.module.scss";
import movie from "./../../../static/img/quiz/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg";
import tv from "./../../../static/img/quiz/game-of-thrones-e1552846351168.webp";
import anime from "./../../../static/img/quiz/Attack-on-Titan-4.webp";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import { useTranslation } from "react-i18next";
import PortalWindow from "../../UI/PortalWindow/PortalWindow";
import GameMode from "../GameMode/GameMode";
import QuizBlock from "./QuizBlock";
const QuizMain = () => {
    const { t } = useTranslation();

    return (
        <div className={s.wrapper}>
            <QuizBlock to="movie" movie={movie} text={t("movie")} />
            <QuizBlock to="tv" movie={tv} text={t("tv")} />
            <QuizBlock to="anime" movie={anime} text={t("Anime")} />
        </div>
    );
};

export default QuizMain;
