import React from "react";
import { useMovieDiscoverQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";

const MostVotedMovies = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useMovieDiscoverQuery({
        param: {
            ...apiParam,
            language: language,
            sort_by: "vote_count.desc",
        },
        url: "",
    });

    const mostVotedList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} id={id + 1} vote key={id} />
    ));
    return (
        <div>
            {isLoading ? <Spiner /> : mostVotedList}{" "}
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
