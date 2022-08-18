import { FC } from "react";
import { Link } from "react-router-dom";
import { TINY_POSTER_URL } from "../../../static/constants/URL";
import { Cast } from "../../../Types/MovieType";
import NO_AVA from "./../../../static/img/noavatar1.png";
import s from "./CastCard.module.scss";

type CastCardType = {
    data: Cast;
};
const CastCard: FC<CastCardType> = ({ data }) => {
    return (
        <Link to={`/person/id/${data.id}`}>
            <li key={data.id} className={s.castCardWrapper}>
                <img
                    src={
                        data.profile_path
                            ? TINY_POSTER_URL + data.profile_path
                            : NO_AVA
                    }
                />
                <div className={s.info}>
                    <h3>{data.name}</h3>
                    <b>{data.character}</b>
                </div>
            </li>
        </Link>
    );
};

export default CastCard;
