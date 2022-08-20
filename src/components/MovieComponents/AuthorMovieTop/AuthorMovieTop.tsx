import React from "react";
import { useGetListQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import { DiscoveryMovie } from "../../../Types/DiscoveryType";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";

const AuthorMovieTop = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useGetListQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: "8213603",
    });
    const MovieList = data?.items.map((el, id) => (
        <DiscoverCard movie={el as DiscoveryMovie} key={id} />
    ));

    return (
        <div>
            {isLoading ? <Spiner /> : MovieList}{" "}
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get author movie top data."}
                />
            )}
        </div>
    );
};

export default AuthorMovieTop;
