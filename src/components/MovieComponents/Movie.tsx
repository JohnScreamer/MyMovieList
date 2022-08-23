import { Link, Route, Routes } from "react-router-dom";
import TopratedMovie from "./TopRatated/TopratedMovie";
import s from "./Movie.module.scss";
import classNames from "classnames";
import trending from "./../../static/img/BG/trending.jpg";
import vote from "./../../static/img/BG/interstellar.webp";
import upcoming from "./../../static/img/BG/upcoming.jpg";
import author from "./../../static/img/BG/author.jpg";
import topRated from "./../../static/img/BG/toprated.jpg";
import { useAppDispatch } from "../../static/hooks/hooks";
import { useEffect } from "react";
import { setIsSlideActive } from "../../redux/slice/GlobalOptionsSlice";
import { useTranslation } from "react-i18next";
import LazyLoadImg from "../UI/LazyLoadImg/LazyLoadImg";
const Movie = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setIsSlideActive(false));
        return () => {
            dispatch(setIsSlideActive(true));
        };
    }, []);
    const { t } = useTranslation();
    return (
        <div className={s.wrapper}>
            <Link
                to={"/movie/topRated/"}
                className={classNames(s.medium, s.block)}
            >
                <LazyLoadImg src={topRated} />
                <h2>{t("topRated")}</h2>
            </Link>

            <div className={s.container}>
                <Link
                    to={"/movie/popular/"}
                    className={classNames(s.small, s.popular, s.block)}
                >
                    <LazyLoadImg src={trending} />
                    <h2>{t("popularNow")}</h2>
                </Link>
                <Link
                    to={"/movie/mostVoted/"}
                    className={classNames(s.small, s.vote, s.block)}
                >
                    <LazyLoadImg src={vote} />
                    <h2>{t("mostVotedMovie")}</h2>
                </Link>
                <Link
                    to={"/movie/worstMovies/"}
                    className={classNames(s.small, s.upcoming, s.block)}
                >
                    <LazyLoadImg src={upcoming} />
                    <h2>{t("worstMovie")}</h2>
                </Link>
                <Link
                    to={"/movie/author_movie_top/"}
                    className={classNames(s.small, s.author, s.block)}
                >
                    <LazyLoadImg src={author} />
                    <h2>{t("topMovieFromAuthor")}</h2>
                </Link>
            </div>
        </div>
    );
};

export default Movie;
