import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../static/SCSS/swiper.scss";
import { MovieType } from "../../../../Types/ApiMoviTypes";
import { TvType } from "../../../../Types/ApiTvTypes";
import { PersonTrendingType } from "../../../../Types/ApiPersonType";
import { FC, useEffect, useRef, useState } from "react";
import SliderCard from "../../../cards/SliderCard/SliderCard";
import s from "./Slide.module.scss";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { useAppDispatch } from "../../../../static/hooks/hooks";
import { setActiveSlide } from "../../../../redux/slice/GlobalOptionsSlice";
type SliderType = {
    label: string;
    data: Array<TvType | MovieType | PersonTrendingType | null>;
    isLoading: boolean;
};
const Slider: FC<SliderType> = ({ label, data, isLoading }) => {
    const dispatch = useAppDispatch();
    const screenWidth = window.screen.width;
    const [activeSlide, setSlide] = useState<any>(null);
    const skeleton = Array(15)
        .fill(null)
        .map((el, id) => (
            <SwiperSlide key={id}>
                {" "}
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    style={{ minWidth: "200px" }}
                    height={300}
                />
            </SwiperSlide>
        ));
    const firstRender = useRef(false);
    useEffect(() => {
        if (firstRender.current) {
            dispatch(setActiveSlide(activeSlide));
        }
        firstRender.current = true;
    }, [activeSlide]);

    const arrOption = data.map((el) => (
        <SwiperSlide key={el?.id}>
            {({ isActive }) => {
                if (isActive && screenWidth < 769) {
                    setSlide(el);
                }
                return <SliderCard info={el} />;
            }}
        </SwiperSlide>
    ));

    return (
        <>
            <h3 className={s.title}>{label}</h3>
            <div className={s.sliderWrapper}>
                <div className={s.decorStart}></div>
                {isLoading ? (
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={50}
                        className="mySwiper"
                        style={{ padding: "0 40px" }}
                    >
                        {skeleton}
                    </Swiper>
                ) : (
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={50}
                        className="mySwiper"
                        style={{ padding: "0 50px" }}
                    >
                        {arrOption}
                    </Swiper>
                )}

                <div className={s.decorEnd}></div>
            </div>
        </>
    );
};
export { Slider };
