import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import Spiner from "../Spiner/Spiner";
import s from "./ZoomImgWrapper.module.scss";
type ZoomImgWrapperType = {
    img: string;
};
const ZoomImgWrapper: FC<ZoomImgWrapperType> = ({ img }) => {
    return (
        <div className={s.wrapper}>
            <Spiner />

            <div className={s.img}>
                {" "}
                <LazyLoadImg src={img} />
            </div>
        </div>
    );
};

export default ZoomImgWrapper;
