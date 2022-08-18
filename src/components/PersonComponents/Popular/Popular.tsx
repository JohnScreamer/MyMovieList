import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTrendingQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import { PersonTrending } from "../../../Types/ApiTrendigTypes";
import PersonTrendingCard from "../../cards/PersonTrendingCard/PersonTrendingCard";
import SkeletonTrendingPerson from "../../skeleton/Skeleton";
import s from "./Popular.module.scss";
type PeriodType = "day" | "week";
const PopularPerson = () => {
    const apiOption = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const [period, setPeriod] = useState<PeriodType>("day");
    const { data, isLoading } = useTrendingQuery({
        param: { ...apiOption, language: language },
        url: `person/${period}`,
    });
    const { t } = useTranslation();
    const skeleton = Array(20)
        .fill(null)
        .map((el, id) => <SkeletonTrendingPerson key={id} />);

    const personList = data?.results.map((el: any, id: number) => {
        if (el.profile_path) {
            return (
                <div className={s.item} key={id}>
                    {" "}
                    <PersonTrendingCard
                        person={el as unknown as PersonTrending}
                    />
                </div>
            );
        }
    });
    return (
        <div className={s.container}>
            <h1>{t("trendingPerson")}</h1>
            <div className={s.filter}>
                {" "}
                <h3>{t("Popular")}</h3>
                <span> </span>
                <button
                    className={classNames(s.btn, {
                        [s.active]: period === "day",
                    })}
                    onClick={() => setPeriod("day")}
                >
                    {t("today")}
                </button>
                <span> | </span>
                <button
                    className={classNames(s.btn, {
                        [s.active]: period === "week",
                    })}
                    onClick={() => setPeriod("week")}
                >
                    {t("week")}
                </button>
            </div>

            <div className={s.wrapper}>{isLoading ? skeleton : personList}</div>
        </div>
    );
};

export default PopularPerson;
