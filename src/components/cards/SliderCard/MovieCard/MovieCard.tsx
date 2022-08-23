import { FC } from "react";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { MovieType } from "../../../../Types/ApiMoviTypes";
import s from "./MovieCard.module.scss";
import { CardWrapper } from "../../../../styledComponents/CardWrapper";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../static/hooks/hooks";
import { setActiveSlide } from "../../../../redux/slice/GlobalOptionsSlice";
import LazyLoadImg from "../../../UI/LazyLoadImg/LazyLoadImg";
type MovieCardType = {
    movie: MovieType;
};

const MovieCard: FC<MovieCardType> = ({ movie }) => {
    const bg = SMALL_POSTER_URL + movie.poster_path;
    const dispatch = useAppDispatch();
    const screenWidth = window.screen.width;
    const handlerSetSlide = () => {
        if (screenWidth > 786) dispatch(setActiveSlide(movie));
    };

    return (
        <Link to={`/movie/id/${movie.id}`}>
            <div className={s.cardWrapper} onMouseOver={handlerSetSlide}>
                <div className={s.decor}>
                    <h3> {movie.title}</h3>
                </div>
                <LazyLoadImg src={bg} />
            </div>
        </Link>
    );
};

export default MovieCard;
