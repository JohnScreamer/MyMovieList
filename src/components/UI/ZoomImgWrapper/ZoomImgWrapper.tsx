import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import s from "./ZoomImgWrapper.module.scss";
type ZoomImgWrapperType = {
    img: string;
};
const ZoomImgWrapper: FC<ZoomImgWrapperType> = ({ img }) => {
    return (
        <div className={s.wrapper}>
            <LazyLoadImg src={img} height="auto" width="auto" />
        </div>
    );
};

export default ZoomImgWrapper;
