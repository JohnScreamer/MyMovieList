import { FC } from "react";
import { useMovieSimilarQuery } from "../../../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../../../static/hooks/hooks";
import { SimilarMovieElem } from "../../../../../Types/MovieType";
import { TVSimilarElemType } from "../../../../../Types/TVType";
import SimilarMovieCard from "../../../../cards/SimilarCard/SimilarMovieCard";
import SimilarTVCard from "../../../../cards/SimilarCard/SimilarTVCard";
import s from "./Similar.module.scss";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../../static/SCSS/swiper2.scss";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@mui/material";
import ErrorPopUp from "../../../../UI/ErrorPopUp/ErrorPopUp";
type SimilarType = {
    id: number;
};

const Similar: FC<SimilarType> = ({ id }) => {
    const language = useAppSelector(selectApiLanguage);
    const param = useAppSelector(selectorApiOptions);
    const { data, isLoading, isError } = useMovieSimilarQuery({
        param: { ...param, language },
        url: id,
    });
    const list = data?.results
        .filter((_, id: number) => id < 10)
        .map((el: SimilarMovieElem) => (
            <SwiperSlide key={el?.id}>
                <SimilarMovieCard key={el.id} data={el} />
            </SwiperSlide>
        ));
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <>
                <Skeleton
                    animation="wave"
                    style={{ marginBottom: "15px" }}
                    height={38}
                    width="170px"
                />
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={"100%"}
                    height={318}
                />
            </>
        );
    }

    return (
        <div className={s.similarWrapper}>
            <h5>{t("similarMovie")}</h5>
            <ul>
                <Swiper
                    slidesPerView={"auto"}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper"
                >
                    {list}{" "}
                </Swiper>
            </ul>
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get similar movie data."}
                />
            )}
        </div>
    );
};

export default Similar;
