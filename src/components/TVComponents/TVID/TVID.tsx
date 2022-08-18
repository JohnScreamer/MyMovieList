import classNames from "classnames";
import React, { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useTvQuery } from "../../../redux/RTQK/KinoList";
import { setActiveSlide } from "../../../redux/slice/GlobalOptionsSlice";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import { SlideType } from "../../../Types/common";
import Overview from "../../MovieComponents/MovieID/MovieIDComponent/Overview/Overview";
import Reviews from "../../Reviews/Reviews";
import MovieTVSceleton from "../../skeleton/MovieTVSceleton";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import BasicInfo from "./BasicInfo/BasicInfo";
import PosterTV from "./PosterTV/PosterTV";
import Similar from "./Similar/Similar";
import TVCredits from "./TVCredits/TVCredits";
import TVHeader from "./TVHeader/TVHeader";

import s from "./TVID.module.scss";
type TVIDType = {};
const TVID: FC<TVIDType> = () => {
    const id = useParams().id || "";
    const apiOption = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useTvQuery({
        param: { ...apiOption, language },
        url: id,
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
    }, [id]);

    if (isLoading) {
        return (
            <div className={s.tvWrapper}>
                <MovieTVSceleton />{" "}
            </div>
        );
    }

    return (
        <div className={classNames(s.tvWrapper, s.loadingEnd)} ref={ref}>
            {data && (
                <>
                    <TVHeader data={data} />
                    <div className={s.infoBlock}>
                        <PosterTV data={data} />
                        <BasicInfo data={data} />
                    </div>
                    <Overview tv={data} />
                    <TVCredits id={id} />
                    <Similar id={Number(id)} />
                    <Reviews reviewsType={"tv"} id={data.id} />
                </>
            )}
            {isError && (
                <ErrorPopUp isError text={"Error, cant get TV data."} />
            )}
        </div>
    );
};

export default TVID;
