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

const MostVotedMovies = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    // const { data, isLoading, isError } = useMovieDiscoverQuery({
    //     param: {
    //         ...apiParam,
    //         language: language,
    //         sort_by: "vote_count.desc",
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
                sort_by: "vote_count.desc",
            });
            if (error) {
                setError(error);
                return;
            }
            setData(response);
        })();
    }, [language]);
    const mostVotedList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} id={id + 1} vote key={id} />
    ));
    return (
        <div>
            {mostVotedList?.length ? mostVotedList : <Spiner />}{" "}
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get most voted movies data."}
                />
            )}
        </div>
    );
};

export default MostVotedMovies;
