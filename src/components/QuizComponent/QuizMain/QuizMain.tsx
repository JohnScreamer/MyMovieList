import React from "react";
import { Link } from "react-router-dom";
import { Img } from "../../UI/Img/ImgWrapper";
import s from "./QuizMain.module.scss";
import movie from "./../../../static/img/quiz/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg";
import tv from "./../../../static/img/quiz/game-of-thrones-e1552846351168.webp";
import anime from "./../../../static/img/quiz/Attack-on-Titan-4.webp";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
const QuizMain = () => {
    return (
        <div className={s.wrapper}>
            <Link to={"/quiz/movie"}>
                <LazyLoadImg src={movie} />
                <h2>Movie</h2>
            </Link>
            <Link to={"/quiz/tv"}>
                <LazyLoadImg src={tv} />
                <h2>Tv</h2>
            </Link>
            <Link to={"/quiz/anime"}>
                <LazyLoadImg src={anime} />
                <h2>Anime</h2>
            </Link>
        </div>
    );
};

export default QuizMain;
