import classNames from "classnames";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { isMovie } from "../../../../features/isMovie";
import { isRelease } from "../../../../features/isRelease";
import { ratingColor } from "../../../../features/ratingColor";
import { Cast } from "../../../../Types/PersonType";
import s from "./Filmography.module.scss";
type FilmographyType = {
    hightRating: Array<Cast>;
    byDate: Array<Cast>;
};
const Filmography: FC<FilmographyType> = ({ hightRating, byDate }) => {
    const [sortByTime, setSortStatus] = useState<boolean>(true);
    const sortType = sortByTime ? byDate : hightRating;
    const { t } = useTranslation();
    const list = sortType.map((el) => (
        <li key={el.id} className={s.row}>
            {" "}
            <h3>
                <Link to={isMovie(el)}>{el.name ? el.name : el.title}</Link>
            </h3>
            <div className={s.time}>{isRelease(el)}</div>
            <div
                style={{ color: ratingColor(el.vote_average) }}
                className={s.rating}
            >
                {el.vote_average ? el.vote_average.toString().slice(0, 3) : "-"}
            </div>
        </li>
    ));

    return (
        <div className={s.filmography}>
            <h2>{t("filmography")}</h2>
            <div className={s.btnWrapper}>
                {" "}
                <span>{t("sortBy")}</span>
                <button
                    className={classNames({ [s.active]: !sortByTime })}
                    onClick={() => setSortStatus(false)}
                >
                    {t("rating")}
                </button>
                <span>|</span>
                <button
                    className={classNames({ [s.active]: sortByTime })}
                    onClick={() => setSortStatus(true)}
                >
                    {t("time")}
                </button>
            </div>
            <div className={s.header}>
                <b className={s.name}>{t("name")}</b>{" "}
                <b className={s.date}> {t("date")}</b>{" "}
                <b className={s.rating}>{t("Rating")}</b>
            </div>
            <ul>{list}</ul>
        </div>
    );
};

export default Filmography;
