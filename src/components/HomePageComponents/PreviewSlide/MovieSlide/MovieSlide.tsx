import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { MovieType } from "../../../../Types/ApiMoviTypes";
import s from "./MovieSlide.module.scss";
type MovieSlideType = {
    movie: MovieType;
};
const MovieSlide: FC<MovieSlideType> = ({ movie }) => {
    const { t } = useTranslation();
    return (
        <div className={s.slideWrapper}>
            <h1>{movie.title}</h1>
            <span>{movie.release_date.slice(0, 4)}</span>
            <p>{movie.overview}</p>
            <NavLink to={`/movie/id/${movie.id}`}>
                <button>{t("getMore")}</button>
            </NavLink>
        </div>
    );
};

export default MovieSlide;
