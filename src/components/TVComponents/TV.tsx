import classNames from "classnames";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { setIsSlideActive } from "../../redux/slice/GlobalOptionsSlice";
import { useAppDispatch } from "../../static/hooks/hooks";
import s from "./TV.module.scss";
import anime from "./../../static/img/BG/bestAnime.webp";
import topRated from "./../../static/img/BG/toTVRATING.jpg";
import tvAuthor from "./../../static/img/BG/bestserialaurthor.jpg";
import popular from "./../../static/img/BG/popularTV.jpg";
import LazyLoadImg from "../UI/LazyLoadImg/LazyLoadImg";

export const TV = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setIsSlideActive(false));
        return () => {
            dispatch(setIsSlideActive(true));
        };
    }, []);
    const { t } = useTranslation();
    return (
        <div className={s.wrapper}>
            <Link
                to={"/tv/top_rated/"}
                className={classNames(s.medium, s.block)}
            >
                <LazyLoadImg src={topRated} />
                <h2>{t("topRatedTV")}</h2>
            </Link>

            <div className={s.container}>
                <Link
                    to={"/tv/popular/"}
                    className={classNames(s.small, s.popular, s.block)}
                >
                    <LazyLoadImg src={popular} />
                    <h2>{t("popularShowNow")}</h2>
                </Link>

                <Link
                    to={"/tv/anime_list/"}
                    className={classNames(s.small, s.upcoming, s.block)}
                >
                    <LazyLoadImg src={anime} />
                    <h2>{t("topAnimeAuthor")}</h2>
                </Link>
                <Link
                    to={"/tv/top_author_list/"}
                    className={classNames(s.small, s.author, s.block)}
                >
                    <LazyLoadImg src={tvAuthor} />
                    <h2>{t("topTVshowFromAuthor")}</h2>
                </Link>
            </div>
        </div>
    );
};
