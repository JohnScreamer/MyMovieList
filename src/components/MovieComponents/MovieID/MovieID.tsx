import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import BasicInfo from "./MovieIDComponent/BasicInfo/BasicInfo";
import MovieCredits from "./MovieIDComponent/MovieCredits/MovieCredits";
import MovieHeader from "./MovieIDComponent/MovieHeader/MovieHeader";
import s from "./MovieID.module.scss";
import PosterMovie from "./MovieIDComponent/PosterMovie/PosterMovie";
import Similar from "./MovieIDComponent/Similar/Similar";
import { setActiveSlide } from "../../../redux/slice/GlobalOptionsSlice";
import { SlideType } from "../../../Types/common";
import MovieTVSceleton from "../../skeleton/MovieTVSceleton";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Reviews from "../../Reviews/Reviews";
import Overview from "./MovieIDComponent/Overview/Overview";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
type MovieIDType = {};
const MovieID: FC<MovieIDType> = () => {
    const param = useParams().id || "";
    const apiOption = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useMovieQuery({
        param: { ...apiOption, language },
        url: param,
    });
    useEffect(() => {
        dispatch(setActiveSlide(data as unknown as SlideType));
    }, [data]);
    const { t } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    }, [param]);
    if (isLoading) {
        return (
            <div className={s.movieWrapper}>
                <MovieTVSceleton />{" "}
            </div>
        );
    }

    return (
        <div className={classNames(s.movieWrapper, s.loadingEnd)} ref={ref}>
            {data && (
                <>
                    <MovieHeader data={data} />
                    <div className={s.infoBlock}>
                        <PosterMovie data={data} />
                        <BasicInfo data={data} />
                    </div>
                    <Overview movie={data} />
                    <MovieCredits id={param} />
                    <Similar id={Number(param)} />
                    <Reviews id={data.id} reviewsType={"movie"} />
                </>
            )}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get movie data."} />
            )}
        </div>
    );
};

export default MovieID;
