import React from "react";
import { useGetListQuery, useOnAirTVQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { AUTHOR_TV_ID } from "../../../static/constants/URL";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./TopTVAuthor.module.scss";

const TopTVAuthor = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useGetListQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: AUTHOR_TV_ID,
    });
    const onAirTV = data?.items.map((el, id) => (
        <DiscoverCard tv={el} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : onAirTV}{" "}
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get top tv author data."}
                />
            )}
        </div>
    );
};

export default TopTVAuthor;
