import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieQuiz from "../../components/QuizComponent/MovieQuiz/MovieQuiz";
import QuizMain from "../../components/QuizComponent/QuizMain/QuizMain";
import { TV } from "../../components/TVComponents/TV";
import s from "./QuizPage.module.scss";
const QuizPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<QuizMain />} />
                <Route
                    path="/movie"
                    element={<MovieQuiz title="Movie" url="8213603" />}
                />
                <Route
                    path="/tv"
                    element={<MovieQuiz title="TV" url="8213566" />}
                />
                <Route
                    path="/anime"
                    element={<MovieQuiz title="Anime" url="8213563" />}
                />
            </Routes>
        </>
    );
};

export default QuizPage;
