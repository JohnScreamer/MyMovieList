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

const WorstMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useMovieDiscoverQuery({
        param: {
            ...apiParam,
            language: language,
            sort_by: "vote_average.asc",
            "vote_count.gte": 1000,
        },
        url: "",
    });
    const worstMovieList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} key={el.id} id={id + 1} />
    ));
    return (
        <div>
            {isLoading ? <Spiner /> : worstMovieList}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get worst movie."} />
            )}
        </div>
    );
};

export default WorstMovie;
