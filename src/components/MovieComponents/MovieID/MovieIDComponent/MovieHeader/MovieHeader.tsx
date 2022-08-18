import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { GetMovieType } from "../../../../../Types/MovieType";
import s from "./MovieHeader.module.scss";
type MovieHeaderType = {
    data: GetMovieType;
};
const MovieHeader: FC<MovieHeaderType> = ({ data }) => {
    const { t } = useTranslation();
    return (
        <header className={s.headerWrapper}>
            <h1>{data.title}</h1>
            <h2>
                {t("originTitle")}
                {data.original_title}
            </h2>
        </header>
    );
};

export default MovieHeader;
