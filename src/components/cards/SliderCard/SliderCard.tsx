import { FC } from "react";
import { MovieType } from "../../../Types/ApiMoviTypes";
import { PersonTrendingType } from "../../../Types/ApiPersonType";
import { TvType } from "../../../Types/ApiTvTypes";
import MovieCard from "./MovieCard/MovieCard";
import PersonCard from "./PersonCard/PersonCard";
import TvCard from "./TvCard/TvCard";

type SliderCardType = {
    info: TvType | MovieType | PersonTrendingType | null;
};
const SliderCard: FC<SliderCardType> = ({ info }) => {
    let slide;

    switch (info?.media_type) {
        case "tv":
            slide = <TvCard tv={info as TvType} />;
            break;
        case "movie":
            slide = <MovieCard movie={info as MovieType} />;
            break;
        // case "person":
        //     slide = <PersonCard person={info as PersonTrendingType} />;
        //     break;

        default:
            break;
    }
    return <div>{slide}</div>;
};

export default SliderCard;
