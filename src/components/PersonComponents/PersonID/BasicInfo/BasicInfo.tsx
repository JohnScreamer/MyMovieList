import { Skeleton } from "@mui/material";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Img } from "../../../UI/Img/ImgWrapper";
import {
    getValidPersonBirthDay,
    getValidPersonDeathDay,
} from "../../../../features/isRelease";
import {
    validPersonDateBirthday,
    validPersonDateDeathday,
} from "../../../../features/ratingFilter";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { Cast, PersonType } from "../../../../Types/PersonType";
import ZoomImg from "../../../UI/ZoomImg/ZoomImg";
import NO_AVA from "./../../../../static/img/noavatar1.png";
import s from "./BasicInfo.module.scss";
type BasicInfoType = {
    data: PersonType | null;
    filmData: Array<Cast>;
};

const BasicInfo: FC<BasicInfoType> = ({ data, filmData }) => {
    const [showText, setTextStatus] = useState(false);
    const { t } = useTranslation();
    if (!data) {
        return null;
    }

    return (
        <div className={s.basicWrapper}>
            <h1>{data?.name}</h1>
            <div className={s.mainInfo}>
                <div className={s.imgWrapper}>
                    {/* <img
                        src={
                            data?.profile_path
                                ? SMALL_POSTER_URL + data?.profile_path
                                : NO_AVA
                        }
                    /> */}

                    <Img imgUrl={SMALL_POSTER_URL + data?.profile_path} />
                </div>
                <div className={s.infoSection}>
                    <div>
                        <b>{t("birthday")}</b>
                        <span>{getValidPersonBirthDay(data)}</span>
                    </div>

                    {data?.deathday && (
                        <div>
                            <b>{t("deathday")}</b>
                            <span>{getValidPersonDeathDay(data)}</span>
                        </div>
                    )}
                    <div>
                        <b>{t("gender")}</b>
                        <span>
                            {data?.gender == 2 ? t("male") : t("female")}
                        </span>
                    </div>
                    <div>
                        <b>{t("birthPlace")}</b>
                        <span>{data?.place_of_birth || "-"}</span>
                    </div>
                    <div>
                        <b>{t("knowFor")}</b>
                        <span>{data?.known_for_department || "-"}</span>
                    </div>
                    <div>
                        <b>{t("popularRating")}</b>
                        <span>{data?.popularity || "-"}</span>
                    </div>
                    <div className={s.popularFilm || "-"}>
                        <b>{t("popularFilm")}</b>

                        <div className={s.filmList}>
                            {filmData.map((el, id) => {
                                if (id < filmData.length - 1) {
                                    return (
                                        <Link
                                            className={s.link}
                                            key={el.id}
                                            to={
                                                el.media_type === "movie"
                                                    ? `/movie/id/${el.id}`
                                                    : `/tv/id/${el.id}`
                                            }
                                        >
                                            {el.name
                                                ? `"${el.name}", `
                                                : `"${el.title}", `}
                                        </Link>
                                    );
                                }
                                return (
                                    <Link
                                        key={el.id}
                                        to={
                                            el.media_type === "movie"
                                                ? `/movie/id/${el.id}`
                                                : `/tv/id/${el.id}`
                                        }
                                    >
                                        {el.name ? el.name : el.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {data?.biography && (
                <>
                    <div className={s.biography}>
                        <h4>{t("biography")}</h4>
                        <p className={showText ? s.active : ""}>
                            {data?.biography}
                        </p>
                    </div>

                    <button
                        className={s.bioBtn}
                        onClick={() => setTextStatus((prev) => !prev)}
                    >
                        {showText ? t("showLess") : t("showMore")}
                    </button>
                </>
            )}
        </div>
    );
};

export default BasicInfo;
