import Rating from "@mui/material/Rating/Rating";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { isRelease } from "../../../../../features/isRelease";
import { dollarFormat } from "../../../../../features/toUSADolarFormat";
import { GetMovieType } from "../../../../../Types/MovieType";
import { Cast } from "../../../../../Types/PersonType";
import s from "./BasicInfo.module.scss";
type BasicInfoType = {
    data: GetMovieType;
};
const BasicInfo: FC<BasicInfoType> = ({ data }) => {
    const { t } = useTranslation();
    return (
        <div className={s.basicInfoWrapper}>
            <div>
                <b>{t("releaseDate")}</b>
                <span>{isRelease(data as unknown as Cast)}</span>
            </div>

            {data.budget ? (
                <div>
                    <b>{t("budget")}</b>
                    <span>{data.budget ? dollarFormat(data.budget) : "-"}</span>
                </div>
            ) : null}
            <div>
                <b>{t("totalVote")}</b>
                <span>{data.vote_count || "-"}</span>
            </div>
            <div>
                <b>{t("popularity")}</b>
                <span>{data.popularity || "-"}</span>
            </div>
            <div>
                <b>{t("Rating")}</b>
                <span>
                    <Rating
                        name="customized-10"
                        onChange={(_, num) => {
                            console.log(num);
                        }}
                        value={data.vote_average}
                        max={10}
                    />
                </span>
            </div>

            <div>
                <b>{t("status")}</b>
                <span>{data.status || "-"}</span>
            </div>
            <div>
                <b>{t("country")}</b>
                <ul>
                    {data.production_countries.map((el, id) => {
                        if (data.production_countries.length - 1 > id) {
                            return <li key={el.name}>{el.name},</li>;
                        }
                        return <li key={el.name}>{el.name}</li>;
                    })}
                </ul>
            </div>
            <div>
                <b>{t("genres")}</b>
                <ul>
                    {data.genres.map((el, id) => {
                        if (data.genres.length - 1 > id) {
                            return <li key={el.name}>{el.name},</li>;
                        }
                        return <li key={el.name}>{el.name}</li>;
                    })}
                </ul>
            </div>

            <div>
                <b>{t("languages")}</b>
                <ul>
                    {data.spoken_languages.map((el, id) => {
                        if (data.spoken_languages.length - 1 > id) {
                            return <li key={el.name}>{el.name},</li>;
                        }
                        return <li key={el.name}>{el.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BasicInfo;
