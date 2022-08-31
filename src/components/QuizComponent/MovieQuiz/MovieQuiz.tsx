import React, { FC, useEffect, useRef } from "react";
import { useGetListQuery } from "../../../redux/RTQK/KinoList";
import { resetQuiz, setSlideArray } from "../../../redux/slice/QuizSlice";
import {
    selectorApiOptions,
    selectApiLanguage,
    selectQuizArr,
    selectWinnerSlide,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import Confeti from "../Confeti/Confeti";
import FirstSlide from "../FirstSlide/FirstSlide";
import QuizStats from "../QuizStats/QuizStats";
import QuizVS from "../QuizVS/QuizVS";
import QuizWinner from "../QuizWinner/QuizWinner";
import SecondSlide from "../SecondSlide/SecondSlide";

import s from "./MovieQuiz.module.scss";

type MovieQuizType = {
    url: string;
    title: string;
};
const MovieQuiz: FC<MovieQuizType> = ({ url, title }) => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const dispatch = useAppDispatch();

    const slideArr = useAppSelector(selectQuizArr);

    const { data, isLoading, isError, isSuccess } = useGetListQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: url,
    });
    useEffect(() => {
        if (data) {
            dispatch(setSlideArray(data.items));
        }
    }, [data]);
    useEffect(() => {
        return () => {
            dispatch(resetQuiz());
        };
    }, []);

    const firstRender = useRef<boolean>(false);
    if (slideArr.length) {
        firstRender.current = true;
    }
    if (isError) {
        return (
            <ErrorPopUp isError text={"Error, cant get  movie quiz data."} />
        );
    }
    if (firstRender.current) {
        return (
            <div className={s.container}>
                {" "}
                <h1>
                    <span className={s.title}> {title}</span>
                </h1>
                <QuizStats />
                <div className={s.wrapper}>
                    <FirstSlide />
                    <QuizVS />
                    <SecondSlide />
                    <QuizWinner />
                </div>
            </div>
        );
    }
    return <Spiner />;
};

export default MovieQuiz;
