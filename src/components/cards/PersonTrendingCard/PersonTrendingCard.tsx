import React, { FC } from "react";
import { PersonTrending } from "../../../Types/ApiTrendigTypes";
import s from "./PersonTrendingCard.module.scss";
import noImg from "./../../../static/img/noavatar1.png";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
type PersonTrendingCardType = {
    person: PersonTrending;
};
const PersonTrendingCard: FC<PersonTrendingCardType> = ({ person }) => {
    const avatar = person.profile_path
        ? SMALL_POSTER_URL + person.profile_path
        : noImg;
    return (
        <Link to={`/person/id/${person.id}`} className={s.wrapper}>
            <div className={s.imgWrapper}>
                {" "}
                <LazyLoadImg src={avatar} />
            </div>
            <h2>{person.name}</h2>
        </Link>
    );
};

export default PersonTrendingCard;
