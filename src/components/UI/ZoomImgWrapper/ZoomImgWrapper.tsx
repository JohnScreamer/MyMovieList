import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import s from "./ZoomImgWrapper.module.scss";
type ZoomImgWrapperType = {
    img: string;
};
const ZoomImgWrapper: FC<ZoomImgWrapperType> = ({ img }) => {
    const url = SMALL_POSTER_URL + img;

    return (
        <div className={s.wrapper}>
            <img src={url} />
        </div>
    );
};

export default ZoomImgWrapper;
