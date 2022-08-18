import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { TrendingElementType } from "../../../Types/ApiTrendigTypes";
import s from "./TrendingCard.module.scss";
type TrendingCardType = {
    el: TrendingElementType;
};

const TrendingCard: FC<TrendingCardType> = ({ el }) => {
    return (
        <div
            className={s.wrapper}
            style={{
                backgroundImage: `url(${SMALL_POSTER_URL + el.poster_path})`,
            }}
        ></div>
    );
};

export default TrendingCard;
