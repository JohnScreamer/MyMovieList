import React, { FC } from "react";
import {
    MEDIUM_BACKGROUND_URL,
    SMALL_POSTER_URL,
} from "../../../static/constants/URL";
import { GetListItemsType } from "../../../Types/GetListType";
import { Img } from "../../UI/Img/ImgWrapper";
import s from "./QuizSlide.module.scss";
import NO_PICTURE from "./../../../static/img/noPOSTERFILM.jpg";
import classNames from "classnames";
import { useAppSelector } from "../../../static/hooks/hooks";
import { selectWinnerSlide } from "../../../selectors/GlobalOptions";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
type QuizSlideType = {
    data: GetListItemsType;
    onClick: () => void;
};
const QuizSlide: FC<QuizSlideType> = ({ data, onClick }) => {
    const poster = data.backdrop_path
        ? MEDIUM_BACKGROUND_URL + data.backdrop_path
        : NO_PICTURE;

    return (
        <div className={classNames(s.quizWrapper)} onClick={onClick}>
            <LazyLoadImg src={poster} />
            <h2>{data.name ? data.name : data.title}</h2>
        </div>
    );
};

export default QuizSlide;
