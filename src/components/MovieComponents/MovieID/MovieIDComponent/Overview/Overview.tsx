import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { GetMovieType } from "../../../../../Types/MovieType";
import { TVType } from "../../../../../Types/TVType";
import s from "./Overview.module.scss";
type OverviewType = {
    movie?: GetMovieType;
    tv?: TVType;
};
const Overview: FC<OverviewType> = ({ movie, tv }) => {
    const [showText, setTextStatus] = useState<boolean>(false);
    const { t } = useTranslation();

    if (!(movie?.overview || tv?.overview)) {
        return null;
    }
    return (
        <>
            <div className={s.overview}>
                <h3>{t("overview")}</h3>
                <p className={showText ? s.active : ""}>
                    {movie?.overview || tv?.overview}
                </p>
            </div>
            <button
                className={s.overviewBtn}
                onClick={() => setTextStatus((prev) => !prev)}
            >
                {showText ? t("showLess") : t("showMore")}
            </button>
        </>
    );
};

export default Overview;
