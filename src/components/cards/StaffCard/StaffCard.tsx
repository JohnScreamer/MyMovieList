import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { Crew } from "../../../Types/TVType";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import noAvatar from "./../../../static/img/noavatar1.png";
import s from "./StaffCard.module.scss";
type StaffCardType = {
    data: Crew;
};
const StaffCard: FC<StaffCardType> = ({ data }) => {
    const avatar = data?.profile_path
        ? SMALL_POSTER_URL + data?.profile_path
        : noAvatar;
    return (
        <Link to={`/person/id/${data.id}`} className={s.staffWrapper}>
            <div className={s.avatar}>
                <LazyLoadImg src={avatar} />
            </div>
            <div className={s.info}>
                <h2>{data.name}</h2>
                <b>{data.job}</b>
            </div>
        </Link>
    );
};

export default StaffCard;
