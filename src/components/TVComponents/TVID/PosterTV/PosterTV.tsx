import { FC } from "react";

import s from "./PosterTV.module.scss";
import { TVType } from "../../../../Types/TVType";
import NO_PICTURE from "./../../../../static/img/noPoster.png";
import { TINY_POSTER_URL } from "../../../../static/constants/URL";
import Rating from "../../../UI/Rating/Rating";
import ZoomImg from "../../../UI/ZoomImg/ZoomImg";

type PosterTVType = {
    data: TVType;
};

const PosterTV: FC<PosterTVType> = ({ data }) => {
    const poster = data.poster_path
        ? TINY_POSTER_URL + data.poster_path
        : NO_PICTURE;

    return (
        <div className={s.poster} style={{ backgroundImage: `url(${poster})` }}>
            <div>
                <div className={s.rating}>
                    <Rating
                        rating={data.vote_average}
                        count={data.vote_count}
                    />
                </div>
                <ZoomImg url={data.poster_path} />
            </div>
        </div>
    );
};

export default PosterTV;
