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
    const param = useAppSelector(selectorApiOptions);
    const [url, setUrl] = useState<any>("");
    // useEffect(() => {
    //     fetch(imgUrl)
    //         .then((response) => {
    //             return response.blob();
    //         })
    //         .then((image) => {
    //             setUrl(URL.createObjectURL(image));
    //         });

    // }, [imgUrl]);

    // if (!url) {
    //     return (
    //         <div>
    //             <Spiner small />
    //         </div>
    //     );
    // }

    return (
        <>
            {/* <img src={imgUrl} /> */}
            <LazyLoadImg src={imgUrl} />
            <ZoomImg url={imgUrl} />
        </>
    );
};
export { Img };
