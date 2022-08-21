import { Skeleton } from "@mui/material";
import axios from "axios";
import { useState, useEffect, FC } from "react";
import { selectorApiOptions } from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import Spiner from "../Spiner/Spiner";
import ZoomImg from "../ZoomImg/ZoomImg";
type ImgType = {
    imgUrl: string;
};
const Img: FC<ImgType> = ({ imgUrl }) => {
    const param = useAppSelector(selectorApiOptions);
    const [url, setUrl] = useState("");
    useEffect(() => {
        // fetch(imgUrl)
        //     .then((response) => {
        //         console.log(response);
        //         return response.blob();
        //     })
        //     .then((image) => {
        //         setUrl(URL.createObjectURL(image));
        //     });

        fetch(imgUrl, { method: "GET", mode: "no-cors" })
            .then((data) => data.blob())
            .then((data) => setUrl(URL.createObjectURL(data)));
    }, [imgUrl]);

    if (!url) {
        return (
            <div>
                <Spiner small />
            </div>
        );
    }

    return (
        <>
            <img src={url} />
            <ZoomImg url={url} />
        </>
    );
};
export { Img };
