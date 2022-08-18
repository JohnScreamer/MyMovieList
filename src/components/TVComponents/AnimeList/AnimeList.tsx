import React from "react";
import { useGetListQuery, useOnAirTVQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./AnimeList.module.scss";
const AnimeList = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useGetListQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: "8213563",
    });
    const animeList = data?.items.map((el, id) => (
        <DiscoverCard tv={el} key={el.id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : animeList}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get anime list."} />
            )}
        </div>
    );
};

export default AnimeList;
