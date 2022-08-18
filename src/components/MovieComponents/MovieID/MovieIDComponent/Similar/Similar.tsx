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
type SimilarType = {
    id: number;
};

const Similar: FC<SimilarType> = ({ id }) => {
    const language = useAppSelector(selectApiLanguage);
    const param = useAppSelector(selectorApiOptions);
    const { data } = useMovieSimilarQuery({
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
    return (
        <div className={s.similarWrapper}>
            <h5>{t("similarMovie")}</h5>
            <ul>
                <Swiper
                    slidesPerView={"auto"}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {list}{" "}
                </Swiper>
            </ul>
        </div>
    );
};

export default Similar;
