import React, { FC, memo, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import s from "./ZoomImg.module.scss";
import { useAppDispatch } from "../../../static/hooks/hooks";
import {
    setPortalStatus,
    setZoomImg,
} from "../../../redux/slice/GlobalOptionsSlice";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
type ZoomImgType = {
    url: string;
};
const ZoomImg: FC<ZoomImgType> = ({ url }) => {
    const dispatch = useAppDispatch();
    const handlerPortalStatus = () => {
        dispatch(setZoomImg(url));
        dispatch(setPortalStatus(true));
    };

    if (!url) {
        return null;
    }
    return (
        <button className={s.wrapper} onClick={handlerPortalStatus}>
            <SearchIcon className={s.icon} />
        </button>
    );
};

export default ZoomImg;
