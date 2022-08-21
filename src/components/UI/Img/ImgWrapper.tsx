import { Skeleton } from "@mui/material";
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
        fetch(imgUrl, {
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
        })
            .then((response) => {
                console.log(response);

                return response.blob();
            })
            .then((image) => {
                setUrl(URL.createObjectURL(image));
            });
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
