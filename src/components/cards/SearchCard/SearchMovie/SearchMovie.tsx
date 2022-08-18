import { FC } from "react";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { ISearchMovie } from "./../../../../Types/common";
import s from "./SearchMovie.module.scss";
import noPoster from "./.././../../../static/img/noPoster.png";
import { Link } from "react-router-dom";

type SearchMovieType = {
    movieData: ISearchMovie;
};

const SearchMovie: FC<SearchMovieType> = ({ movieData }) => {
    return (
        <li className={s.cardWrapper}>
            <Link to={`/movie/id/${movieData.id}`}>
                <div className={s.imgContainer}>
                    {movieData.poster_path ? (
                        <img src={SMALL_POSTER_URL + movieData.poster_path} />
                    ) : (
                        <img src={noPoster} alt="" />
                    )}
                </div>
            </Link>

            <div className={s.text}>
                <Link to={`/movie/id/${movieData.id}`}>
                    <h3>{movieData.title}</h3>
                </Link>
                <p>{movieData.overview}</p>
            </div>
            {movieData.release_date && (
                <span>{movieData.release_date.slice(0, 4)}</span>
            )}
        </li>
    );
};

export default SearchMovie;
