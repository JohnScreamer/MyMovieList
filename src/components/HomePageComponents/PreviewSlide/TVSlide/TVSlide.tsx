import Skeleton from "@mui/material/Skeleton/Skeleton";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { TvType } from "../../../../Types/ApiTvTypes";
import s from "./TVSlide.module.scss";
type TVSlideType = {
    tv: TvType;
};
const TVSlide: FC<TVSlideType> = ({ tv }) => {
    const { t } = useTranslation();
    return (
        <div className={s.slideWrapper}>
            <h1>{tv.name}</h1>
            <span>{tv.first_air_date.slice(0, 4)}</span>
            <p>{tv.overview}</p>
            <NavLink to={`/tv/id/${tv.id}`}>
                <button>{t("getMore")}</button>
            </NavLink>
        </div>
    );
};

export default TVSlide;
