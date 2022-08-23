import React, { FC, memo, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ZoomImg from "../ZoomImg/ZoomImg";
import s from "./LazyLoadImg.module.scss";
import spin from "./../../../static/img/gif/Spin-0.9s-182px.gif";
import { Skeleton } from "@mui/material";
import Spiner from "../Spiner/Spiner";
type LazyLoadImgType = {
    src: string;
    zoom?: boolean;
    width?: string;
    height?: string;
};
const LazyLoadImg: FC<LazyLoadImgType> = ({ src, zoom, width, height }) => {
    const [isLoading, setLoadingStatus] = useState(false);
    const [loadStart, setLoadStart] = useState(true);
    useEffect(() => {
        setLoadingStatus(false);
        setLoadStart(true);
    }, [src]);
    const handlerLoad = () => {
        setLoadingStatus(true);
        setLoadStart(false);
        console.log(isLoading);
    };

    return (
        <>
            {/* <LazyLoadImage
                // alt={image.alt}
                
                src={src}
               
                afterLoad={handlerIsLoad}
                beforeLoad={handlerBeforeLoad}
            /> */}
            <img
                style={{ opacity: isLoading ? "100%" : "0%" }}
                src={src}
                width={width ? width : "100%"}
                height={height ? height : "100%"}
                onLoad={handlerLoad}
            />

            {loadStart && (
                <div className={s.placeholder}>{/* <Spiner /> */}</div>
            )}
            {zoom && isLoading && <ZoomImg url={src} />}
        </>
    );
};

export default LazyLoadImg;
