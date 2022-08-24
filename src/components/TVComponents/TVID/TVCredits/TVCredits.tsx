import { FC, useEffect, useState } from "react";
import { useTvCreditsQuery } from "../../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../../static/hooks/hooks";
import CastTVCard from "../../../cards/CastTVCard/CastTVCard";

import s from "./TVCredits.module.scss";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../static/SCSS/Mixin.scss";
import "swiper/css/navigation";
import Portal from "../../../portal/Portal";
import PortalWindow from "../../../UI/PortalWindow/PortalWindow";
import { useTranslation } from "react-i18next";
import ErrorPopUp from "../../../UI/ErrorPopUp/ErrorPopUp";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import Staff from "../../../UI/COMMON/Staff/Staff";
import { Skeleton } from "@mui/material";
type TVCreditsType = {
    id: string;
};
const TVCredits: FC<TVCreditsType> = ({ id }) => {
    const location = useLocation();
    const status = !!Number(qs.parse(location?.search.slice(1))?.credits);
    const language = useAppSelector(selectApiLanguage);
    const param = useAppSelector(selectorApiOptions);
    const [portalStatus, setPortalStatus] = useState(status || false);
    const navigate = useNavigate();
    const handlerPortalStatus = (status: boolean) => {
        navigate(`${location.pathname}?credits=${status ? 1 : 0}`, {});
    };
    useEffect(() => {
        setPortalStatus(status || false);
    }, [status]);
    const { data, isError, isLoading } = useTvCreditsQuery({
        param: { ...param, language },
        url: id,
    });
    const credits = data?.cast
        .filter((el, id) => id < 10)
        .map((el) => (
            <SwiperSlide key={el?.id}>
                {" "}
                <CastTVCard key={el.id} data={el} lazy />
            </SwiperSlide>
        ));
    const allCredits = data?.cast.map((el: any) => (
        <CastTVCard key={el.id} data={el} />
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

    if (!data?.cast.length) {
        return null;
    }

    return (
        <div className={s.container}>
            <div className={s.creditsWrapper}>
                {isError && (
                    <ErrorPopUp
                        isError
                        text={"Error, cant get tv credits data."}
                    />
                )}
                <div>
                    {" "}
                    <h6>{t("cast")}</h6>
                    <ul>
                        {" "}
                        <Swiper
                            slidesPerView={"auto"}
                            navigation={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Keyboard]}
                            className="mySwiper"
                        >
                            {credits}{" "}
                        </Swiper>
                    </ul>
                </div>
                {data?.cast.length && data?.cast.length > 5 && (
                    <button onClick={() => handlerPortalStatus(true)}>
                        {t("seeAll")} {data?.cast.length}
                    </button>
                )}
                {portalStatus && (
                    <Portal
                        component={
                            <PortalWindow
                                closeWindowFunc={handlerPortalStatus}
                                content={
                                    <ul className={s.allCredits}>
                                        {allCredits}
                                    </ul>
                                }
                            />
                        }
                    />
                )}
            </div>
            <Staff data={data?.crew} />
        </div>
    );
};

export default TVCredits;
