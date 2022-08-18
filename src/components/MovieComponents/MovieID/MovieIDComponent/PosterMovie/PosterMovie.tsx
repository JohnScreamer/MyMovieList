import { FC } from "react";
import { TINY_POSTER_URL } from "../../../../../static/constants/URL";
import { GetMovieType } from "../../../../../Types/MovieType";
import s from "./PosterMovie.module.scss";
import NO_PICTURE from "./../../../../../static/img/noPoster.png";
import Rating from "../../../../UI/Rating/Rating";
import ZoomImg from "../../../../UI/ZoomImg/ZoomImg";
type PosterMovieType = {
    data: GetMovieType;
};

const PosterMovie: FC<PosterMovieType> = ({ data }) => {
    const poster = data.poster_path
        ? TINY_POSTER_URL + data.poster_path
        : NO_PICTURE;
    return (
        <div className={s.poster} style={{ backgroundImage: `url(${poster})` }}>
            <div>
                <Rating rating={data.vote_average} count={data.vote_count} />
            </div>
            <ZoomImg url={data.poster_path} />
        </div>
    );
};

export default PosterMovie;
