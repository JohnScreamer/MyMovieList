import { FC } from "react";
import { SimilarMovieElem } from "../../../Types/MovieType";
import { TVSimilarElemType } from "../../../Types/TVType";
import s from "./SimilarCard.module.scss";
import NO_PICTURE from "./../../../static/img/noPoster.png";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
type SimilarMovieCardType = {
    data: SimilarMovieElem;
};

const SimilarMovieCard: FC<SimilarMovieCardType> = ({ data }) => {
    const poster = data.poster_path
        ? SMALL_POSTER_URL + data.poster_path
        : NO_PICTURE;
    return (
        <Link to={`/movie/id/${data.id}`}>
            {" "}
            <li className={s.cardWrapper}>
                <LazyLoadImg src={poster} />
                <div className={s.textSection}>
                    <h2 className={s.title}>{data.title}</h2>
                    {data.release_date && (
                        <span>{data.release_date.slice(0, 4)}</span>
                    )}
                </div>
            </li>
        </Link>
    );
};

export default SimilarMovieCard;
