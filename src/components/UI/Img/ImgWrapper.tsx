import { Skeleton } from "@mui/material";
import axios from "axios";
import { useState, useEffect, FC } from "react";
import { selectorApiOptions } from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import Spiner from "../Spiner/Spiner";
import ZoomImg from "../ZoomImg/ZoomImg";
type ImgType = {
    imgUrl: string;
};
const Img: FC<ImgType> = ({ imgUrl }) => {
    return (
        <>
            <LazyLoadImg src={imgUrl} />
            <ZoomImg url={imgUrl} />
        </>
    );
};
export { Img };
