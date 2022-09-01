import React, { FC, useEffect, useState } from "react";
import {
    MEDIUM_BACKGROUND_URL,
    SMALL_POSTER_URL,
} from "../../../static/constants/URL";
import { GetListItemsType } from "../../../Types/GetListType";
import { Img } from "../../UI/Img/ImgWrapper";
import s from "./QuizSlide.module.scss";
import NO_PICTURE from "./../../../static/img/noPOSTERFILM.jpg";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import { selectWinnerSlide } from "../../../selectors/GlobalOptions";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import { CSSTransition } from "react-transition-group";
import { setAnimStatus } from "../../../redux/slice/QuizSlice";
type QuizSlideType = {
    data: GetListItemsType;
    onClick: () => void;
    animStatus: boolean;
    num: "first" | "second";
};
const QuizSlide: FC<QuizSlideType> = ({ data, onClick, animStatus, num }) => {
    const poster = data.backdrop_path
        ? MEDIUM_BACKGROUND_URL + data.backdrop_path
        : NO_PICTURE;

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setAnimStatus({ slide: num, status: true }));

        return () => {};
    }, [data]);

    return (
        <>
            {" "}
            <CSSTransition
                in={animStatus}
                timeout={600}
                unmountOnExit
                classNames={`my-${num}`}
            >
                <div className={classNames(s.quizWrapper)} onClick={onClick}>
                    <LazyLoadImg src={poster} />

                    <h2>{data.name ? data.name : data.title}</h2>
                </div>
            </CSSTransition>
        </>
    );
};

export default QuizSlide;
