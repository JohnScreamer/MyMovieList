import React, { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ZoomImg from "../ZoomImg/ZoomImg";
import s from "./LazyLoadImg.module.scss";
import spin from "./../../../static/img/gif/Spin-0.9s-182px.gif";
import { Skeleton } from "@mui/material";
import Spiner from "../Spiner/Spiner";
type LazyLoadImgType = {
    src: string;
};
const LazyLoadImg: FC<LazyLoadImgType> = ({ src }) => {
    const [isLoading, setLoadingStatus] = useState(false);
    const [loadStart, setLoadStart] = useState(false);
    const handlerIsLoad = () => {
        setLoadingStatus(true);
        setLoadStart(false);
    };
    return (
        <>
            <LazyLoadImage
                // alt={image.alt}
                height={"100%"}
                src={src}
                width={"100%"}
                afterLoad={handlerIsLoad}
                beforeLoad={() => setLoadStart(true)}
            />
            {loadStart && (
                <div className={s.placeholder}>
                    <Spiner />
                </div>
            )}
            {isLoading && <ZoomImg url={src} />}
        </>
    );
};

export default LazyLoadImg;
