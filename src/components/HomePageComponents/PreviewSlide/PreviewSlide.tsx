import React, { FC } from "react";
import { MovieType } from "../../../Types/ApiMoviTypes";
import { TvType } from "../../../Types/ApiTvTypes";
import MovieSlide from "./MovieSlide/MovieSlide";
import s from "./PreviewSlide.module.scss";
import TVSlide from "./TVSlide/TVSlide";
import {
    selectActiveSlide,
    selectIsLoadingStatus,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import Skeleton from "@mui/material/Skeleton/Skeleton";
type PreviewSlideType = {};
const PreviewSlide: FC<PreviewSlideType> = () => {
    const activeSlide = useAppSelector(selectActiveSlide);
    const isLoading = useAppSelector(selectIsLoadingStatus);
    let slide;

    switch (activeSlide?.media_type) {
        case "tv":
            slide = <TVSlide tv={activeSlide as TvType} />;
            break;
        case "movie":
            slide = <MovieSlide movie={activeSlide as MovieType} />;
            break;

        default:
            break;
    }

    return (
        <div className={s.prevSlide}>
            {isLoading ? (
                <div className={s.skeletonWrapper}>
                    <Skeleton
                        variant="text"
                        animation={"wave"}
                        sx={{
                            fontSize: "70px",
                            maxWidth: "200px",
                            margin: "0 15px",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        width={100}
                        animation={"wave"}
                        sx={{ fontSize: "20px", margin: "0 15px" }}
                    />
                    <Skeleton
                        variant="text"
                        height={150}
                        sx={{
                            fontSize: "40px",
                            margin: "0 15px",
                            maxWidth: "450px",
                        }}
                        animation={"wave"}
                    />
                    <Skeleton
                        variant="text"
                        width={100}
                        animation={"wave"}
                        sx={{ fontSize: "20px", margin: "0 15px" }}
                    />
                </div>
            ) : (
                <div>{slide}</div>
            )}
        </div>
    );
};

export default PreviewSlide;
