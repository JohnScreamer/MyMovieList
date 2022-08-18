import React, { useEffect, useState } from "react";
import { DiscoverMovieRequest } from "../../../API/DiscoverMovie";
import { useMovieDiscoverQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import { DiscoveryMovieResponse } from "../../../Types/DiscoveryType";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";

const WorstMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    // const { data, isLoading, isError } = useMovieDiscoverQuery({
    //     param: {
    //         ...apiParam,
    //         language: language,
    //         sort_by: "vote_average.asc",
    //         "vote_count.gte": 1000,
    //     },
    //     url: "",
    // });

    const [data, setData] = useState<DiscoveryMovieResponse | null>(null);
    const [isError, setError] = useState(false);
    useEffect(() => {
        (async function () {
            const [response, error] = await DiscoverMovieRequest("", {
                ...apiParam,
                language: language,
                sort_by: "vote_average.asc",
                "vote_count.gte": 1000,
            });
            if (error) {
                setError(error);
                return;
            }
            setData(response);
        })();
    }, [language]);

    const worstMovieList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} key={el.id} id={id + 1} />
    ));
    return (
        <div>
            {worstMovieList?.length ? worstMovieList : <Spiner />}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get worst movie."} />
            )}
        </div>
    );
};

export default WorstMovie;
