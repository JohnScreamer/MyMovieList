import React, { FC, memo, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ZoomImg from "../ZoomImg/ZoomImg";
import s from "./LazyLoadImg.module.scss";
import spin from "./../../../static/img/gif/Spin-0.9s-182px.gif";
import { Skeleton } from "@mui/material";
import Spiner from "../Spiner/Spiner";
import broken from "./../../../static/img/broken-1.webp";
type LazyLoadImgType = {
    src: string;
    zoom?: boolean;
    width?: string;
    height?: string;
};
const LazyLoadImg: FC<LazyLoadImgType> = ({ src, zoom, width, height }) => {
    const [isLoading, setLoadingStatus] = useState<boolean>(false);
    const [loadStart, setLoadStart] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(false);
    useEffect(() => {
        setLoadingStatus(false);
        setLoadStart(true);
    }, [src]);
    const handlerLoad = () => {
        setLoadingStatus(true);
        setLoadStart(false);
        console.log(isLoading);
    };
    const handlerError = () => {
        setError(true);
    };
    if (isError)
        return (
            <img
                src={broken}
                width={width ? width : "100%"}
                height={height ? height : "100%"}
            />
        );

    return (
        <>
            <img
                style={{ opacity: isLoading ? "100%" : "0%" }}
                src={src}
                width={width ? width : "100%"}
                height={height ? height : "100%"}
                onLoad={handlerLoad}
                onError={handlerError}
            />

            {loadStart && (
                <div className={s.placeholder}>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
            )}
            {zoom && isLoading && <ZoomImg url={src} />}
        </>
    );
};

export default LazyLoadImg;
