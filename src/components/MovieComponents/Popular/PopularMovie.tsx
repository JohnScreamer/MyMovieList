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

const PopularMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useMovieDiscoverQuery({
        param: {
            ...apiParam,
            language: language,
            sort_by: "popularity.desc",
        },
        url: "",
    });
    const popularList = data?.results.map((el) => (
        <DiscoverCard movie={el} key={el.id} />
    ));
    return (
        <div>
            {isLoading ? <Spiner /> : popularList}{" "}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get popular movie."} />
            )}
        </div>
    );
};

export default PopularMovie;
