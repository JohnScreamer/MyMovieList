import React from "react";
import { useMovieDiscoverQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
    selectorLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./TopratedMovie.module.scss";
const TopratedMovie = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isError, isLoading } = useMovieDiscoverQuery({
        param: {
            ...apiParam,
            language: language,
            sort_by: "vote_average.desc",
            "vote_count.gte": 1000,
        },
        url: "",
    });
    const topRatedList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} id={id + 1} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : topRatedList}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get top rated movie."} />
            )}
        </div>
    );
};

export default TopratedMovie;
