import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MEDIUM_BACKGROUND_URL } from "../../../static/constants/URL";
import { CardWrapper } from "../../../styledComponents/DiscovercardWrapper";
import { DiscoveryMovie, DiscoveryTV } from "../../../Types/DiscoveryType";
import s from "./DiscoverCard.module.scss";
import noPhoto from "./../../../static/img/BG/noPOSTERFILM.jpg";
import { ratingColor } from "../../../features/ratingColor";
type DiscoverCardType = {
    movie?: DiscoveryMovie;
    tv?: DiscoveryTV;
    id?: number;
    vote?: boolean;
};
const DiscoverCard: FC<DiscoverCardType> = ({ movie, tv, id, vote }) => {
    if (movie) {
        let bg = noPhoto;

        if (movie.backdrop_path) {
            bg = MEDIUM_BACKGROUND_URL + movie.backdrop_path;
        }
        return (
            <Link to={`/movie/id/${movie.id}`}>
                <CardWrapper bg={bg} className={s.cardWrapper}>
                    {id && <span className={s.num}>#{id}</span>}
                    {movie.vote_average && (
                        <span
                            className={s.rating}
                            style={{ color: ratingColor(movie.vote_average) }}
                        >
                            {String(movie.vote_average).slice(0, 3)}
                        </span>
                    )}

                    <h2>{movie.title}</h2>
                    <b>{movie.release_date}</b>
                    <p>{movie.overview}</p>

                    {vote && (
                        <span className={s.vote}>
                            Total vote:<b>{movie.vote_count}</b>
                        </span>
                    )}
                </CardWrapper>
            </Link>
        );
    }
    if (tv) {
        let bg = noPhoto;

        if (tv.backdrop_path) {
            bg = MEDIUM_BACKGROUND_URL + tv.backdrop_path;
        }
        return (
            <Link to={`/tv/id/${tv.id}`}>
                <CardWrapper bg={bg} className={s.cardWrapper}>
                    {id && <span className={s.num}>#{id}</span>}
                    {tv.vote_average && (
                        <span
                            className={s.rating}
                            style={{ color: ratingColor(tv.vote_average) }}
                        >
                            {tv.vote_average}
                        </span>
                    )}
                    <h2>{tv.name}</h2>
                    <b>{tv.first_air_date}</b>
                    <p>{tv.overview}</p>
                </CardWrapper>
            </Link>
        );
    }
    return null;
};

export default DiscoverCard;
