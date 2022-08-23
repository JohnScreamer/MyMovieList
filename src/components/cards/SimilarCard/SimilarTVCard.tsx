import { FC } from "react";
import { Link } from "react-router-dom";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { TVSimilarElemType } from "../../../Types/TVType";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import NO_PICTURE from "./../../../static/img/noPoster.png";
import s from "./SimilarCard.module.scss";
type SimilarTVCardType = {
    data: TVSimilarElemType;
};

const SimilarTVCard: FC<SimilarTVCardType> = ({ data }) => {
    const poster = data.poster_path
        ? SMALL_POSTER_URL + data.poster_path
        : NO_PICTURE;
    return (
        <Link to={`/tv/id/${data.id}`}>
            <li className={s.cardWrapper}>
                <LazyLoadImg src={poster} />
                <div className={s.textSection}>
                    <h2 className={s.title}>{data.name}</h2>
                    {data.first_air_date && (
                        <span>{data.first_air_date.slice(0, 4)}</span>
                    )}
                </div>
            </li>
        </Link>
    );
};

export default SimilarTVCard;
