import React from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import MovieQuiz from "../../components/QuizComponent/MovieQuiz/MovieQuiz";
import QuizMain from "../../components/QuizComponent/QuizMain/QuizMain";
import { TV } from "../../components/TVComponents/TV";
import { ANIME_QUIZ, MOVIE_QUIZ, TV_QUIZ } from "../../static/constants/URL";
import s from "./QuizPage.module.scss";
const QuizPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Routes>
                <Route path="/" element={<QuizMain />} />
                <Route
                    path="/movie"
                    element={<MovieQuiz title={t("movie")} url={MOVIE_QUIZ} />}
                />
                <Route
                    path="/tv"
                    element={<MovieQuiz title={t("tv")} url={TV_QUIZ} />}
                />
                <Route
                    path="/anime"
                    element={<MovieQuiz title={t("Anime")} url={ANIME_QUIZ} />}
                />
            </Routes>
        </>
    );
};

export default QuizPage;
