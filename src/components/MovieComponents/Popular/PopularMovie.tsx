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

const PopularMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    // const { data, isLoading, isError } = useMovieDiscoverQuery({
    //     param: {
    //         ...apiParam,
    //         language: language,
    //         sort_by: "popularity.desc",
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
                sort_by: "popularity.desc",
            });
            if (error) {
                setError(error);
                return;
            }
            setData(response);
        })();
    }, [language]);
    const popularList = data?.results.map((el) => (
        <DiscoverCard movie={el} key={el.id} />
    ));
    return (
        <div>
            {popularList?.length ? popularList : <Spiner />}{" "}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get popular movie."} />
            )}
        </div>
    );
};

export default PopularMovie;
