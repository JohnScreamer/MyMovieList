import Rating from "@mui/material/Rating/Rating";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { isRelease } from "../../../../features/isRelease";
import { Cast } from "../../../../Types/PersonType";
import { TVType } from "../../../../Types/TVType";
import s from "./BasicInfo.module.scss";
type BasicInfoType = {
    data: TVType;
};
const BasicInfo: FC<BasicInfoType> = ({ data }) => {
    const { t } = useTranslation();
    return (
        <div className={s.basicInfoWrapper}>
            <div>
                <b>{t("releaseDate")}</b>
                <span>{isRelease(data as unknown as Cast)}</span>
            </div>
            <div>
                <b>{t("episodes")}</b>
                <span>{data.number_of_episodes}</span>
            </div>
            <div>
                <b>{t("seasons")}</b>
                <span>{data.number_of_seasons}</span>
            </div>
            <div>
                <b>{t("totalVote")}</b>
                <span>{data.vote_count}</span>
            </div>
            <div>
                <b>{t("popularity")}</b>
                <span>{data.popularity}</span>
            </div>
            <div>
                <b>{t("Rating")}</b>
                <span>
                    <Rating
                        name="customized-10"
                        onChange={() => {}}
                        value={data.vote_average}
                        max={10}
                    />
                </span>
            </div>

            <div>
                <b>{t("status")}</b>
                <span>{data.status}</span>
            </div>
            <div>
                <b>{t("country")}</b>
                <ul className={s.country}>
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
