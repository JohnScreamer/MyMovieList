import React, { useEffect, useState } from "react";
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
        fetch(
            "https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=48bce37aca39640849c2b1ca0861e9b9&sort_by=vote_average.desc&vote_count.gte=1000"
        )
            .then((data) => data.json())
            .then((data) => setData(data));
    }, []);
    const topRatedList = data?.results.map((el, id) => (
        <DiscoverCard movie={el} id={id + 1} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {/* <ErrorPopUp isError text={"Error, cant get top rated movie."} /> */}
            {topRatedList}
        </div>
    );
};

export default TopratedMovie;
