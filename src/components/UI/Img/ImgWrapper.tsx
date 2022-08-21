import { Skeleton } from "@mui/material";
import { useState, useEffect, FC } from "react";
import Spiner from "../Spiner/Spiner";
import ZoomImg from "../ZoomImg/ZoomImg";
type ImgType = {
    imgUrl: string;
};
const Img: FC<ImgType> = ({ imgUrl }) => {
    const [url, setUrl] = useState("");
    useEffect(() => {
        fetch(imgUrl)
            .then((response) => response.blob())
            .then((image) => {
                setUrl(URL.createObjectURL(image));
            });
    }, []);

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
