import React, { FC } from "react";
import { Crew } from "../../../../Types/TVType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../static/SCSS/swiper2.scss";
import "swiper/css/navigation";
import StaffCard from "../../../cards/StaffCard/StaffCard";
import s from "./Staff.module.scss";
import { useTranslation } from "react-i18next";
type StaffType = {
    data: Array<Crew>;
};
const Staff: FC<StaffType> = ({ data }) => {
    const { t } = useTranslation();
    if (!data) {
        return null;
    }
    const credits = data
        .filter((_, id) => id < 10)
        .map((el, id) => (
            <SwiperSlide key={id}>
                <StaffCard data={el} />
            </SwiperSlide>
        ));
    return (
        <div className={s.staffWrapper}>
            <h3 className={s.title}>{t("staff")}</h3>
            <ul className={s.list}>
                <Swiper
                    slidesPerView={"auto"}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper"
                >
                    {credits}
                </Swiper>
            </ul>
        </div>
    );
};

export default Staff;
