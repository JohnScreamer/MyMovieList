import Rating from "../../Rating/Rating";
import React, { FC } from "react";
import {
    SMALL_POSTER_URL,
    TINY_POSTER_URL,
} from "../../../../static/constants/URL";
import { TVType } from "../../../../Types/TVType";
import ZoomImg from "../../ZoomImg/ZoomImg";
import s from "./Poster.module.scss";
import NO_PICTURE from "./../../../../static/img/noPoster.png";
import { GetMovieType } from "../../../../Types/MovieType";
import { Img } from "../../Img/ImgWrapper";
import LazyLoadImg from "../../LazyLoadImg/LazyLoadImg";

type PosterType = {
    movie?: GetMovieType;
    tv?: TVType;
};

const Poster: FC<PosterType> = ({ tv, movie }) => {
    if (movie) {
        const poster = movie.poster_path
            ? SMALL_POSTER_URL + movie.poster_path
            : NO_PICTURE;
        return (
            <div className={s.poster}>
                <div className={s.rating}>
                    <Rating
                        rating={movie.vote_average}
                        count={movie.vote_count}
                    />
                </div>
                <Img imgUrl={poster} />
            </div>
        );
    }
    if (tv) {
        const poster = tv.poster_path
            ? SMALL_POSTER_URL + tv.poster_path
            : NO_PICTURE;

        return (
            <div className={s.poster}>
                <div className={s.rating}>
                    <Rating rating={tv.vote_average} count={tv.vote_count} />
                </div>
                <Img imgUrl={poster} />
                <LazyLoadImg src={poster} />
            </div>
        );
    }
    return null;
};

export default Poster;
