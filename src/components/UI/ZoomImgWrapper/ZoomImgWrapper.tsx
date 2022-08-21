import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import s from "./ZoomImgWrapper.module.scss";
type ZoomImgWrapperType = {
    img: string;
};
const ZoomImgWrapper: FC<ZoomImgWrapperType> = ({ img }) => {
    return (
        <div className={s.wrapper}>
            <img src={img} />
        </div>
    );
};

export default ZoomImgWrapper;
