import React, { FC } from "react";
import s from "./ImgList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "./../../../../static/SCSS/swiper3.scss";
import "swiper/css/navigation";
import { PersonImgResponse } from "../../../../Types/GetImgTypes";
import { ORIGIN_BACKGROUND_URL } from "../../../../static/constants/URL";
import { usePersonImgQuery } from "../../../../redux/RTQK/KinoList";
import { selectorApiOptions } from "../../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../../static/hooks/hooks";
import ZoomImg from "../../../UI/ZoomImg/ZoomImg";
import ErrorPopUp from "../../../UI/ErrorPopUp/ErrorPopUp";
type ImgListType = {
    id: number;
};
const ImgList: FC<ImgListType> = ({ id }) => {
    const param = useAppSelector(selectorApiOptions);
    const { data, isError } = usePersonImgQuery({ param, url: id });

    const slides = data?.profiles.map((el, id) => {
        return (
            <SwiperSlide key={id}>
                <div className={s.slide}>
                    <img
                        src={ORIGIN_BACKGROUND_URL + el.file_path}
                        alt="picture"
                    />
                    <div className={s.zoom}>
                        <ZoomImg url={el.file_path} />
                    </div>
                </div>
            </SwiperSlide>
        );
    });
    return (
        <div className={s.imgList}>
            <div className={s.slider}>
                <Swiper
                    slidesPerView={"auto"}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {slides}
                </Swiper>
            </div>
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get person image list data."}
                />
            )}
        </div>
    );
};

export default ImgList;
