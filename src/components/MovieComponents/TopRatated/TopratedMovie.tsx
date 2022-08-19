import React, { useEffect, useState } from "react";
import { DiscoverMovieRequest } from "../../../API/DiscoverMovie";
import { useMovieDiscoverQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
    selectorLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import { DiscoveryMovieResponse } from "../../../Types/DiscoveryType";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./TopratedMovie.module.scss";
const TopratedMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const [data, setData] = useState<DiscoveryMovieResponse | null>(null);
    const [isError, setError] = useState(false);
    // const { data, isError, isLoading } = useMovieDiscoverQuery({
    //     param: {
    //         ...apiParam,
    //         language: language,
    //         sort_by: "vote_average.desc",
    //         "vote_count.gte": 1000,
    //     },
    //     url: "",
    // });

    useEffect(() => {
        (async function () {
            const [response, error] = await DiscoverMovieRequest("", {
                ...apiParam,
                language: language,
                sort_by: "vote_average.desc",
                "vote_count.gte": 1000,
            });
            if (error) {
                setError(error);
                return;
            }
            setData(response);
        })();
    }, [language]);

    const topRatedList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} id={id + 1} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isError && (
                <ErrorPopUp isError text={"Error, cant get top rated movie."} />
            )}
            {topRatedList?.length ? topRatedList : <Spiner />}
        </div>
    );
};

export default TopratedMovie;
