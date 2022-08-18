import React from "react";
import { usePopularTVQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./Popular.module.scss";
const PopularTV = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = usePopularTVQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: "",
    });
    const popularTVList = data?.results.map((el, id) => (
        <DiscoverCard tv={el} id={id + 1} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : popularTVList}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get popular TV data."} />
            )}
        </div>
    );
};

export default PopularTV;
