import { FC } from "react";
import { useTVSimilarQuery } from "../../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../../static/hooks/hooks";
import { TVSimilarElemType } from "../../../../Types/TVType";
import SimilarTVCard from "../../../cards/SimilarCard/SimilarTVCard";
import s from "./Similar.module.scss";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../static/SCSS/Mixin.scss";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import ErrorPopUp from "../../../UI/ErrorPopUp/ErrorPopUp";
type SimilarType = {
    id: number;
};

const Similar: FC<SimilarType> = ({ id }) => {
    const language = useAppSelector(selectApiLanguage);
    const param = useAppSelector(selectorApiOptions);
    const { data, isError } = useTVSimilarQuery({
        param: { ...param, language },
        url: id,
    });
    const { t } = useTranslation();
    const list = data?.results
        .filter((_, id: number) => id < 10)
        .map((el: TVSimilarElemType) => (
            <SwiperSlide key={el?.id}>
                <SimilarTVCard key={el.id} data={el} />
            </SwiperSlide>
        ));
    return (
        <div className={s.similarWrapper}>
            <h5>{t("similarMovie")}</h5>
            <ul>
                {" "}
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
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get similar tv show data."}
                />
            )}
        </div>
    );
};

export default Similar;
