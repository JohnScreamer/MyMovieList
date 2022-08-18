import { FC, useEffect, useRef, useState } from "react";
import { useMovieCreditsQuery } from "../../../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../../../selectors/GlobalOptions";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import qs from "query-string";
import { useAppSelector } from "../../../../../static/hooks/hooks";
import CastCard from "../../../../cards/CastCard/CastCard";
import s from "./MovieCredits.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../../../../static/SCSS/swiper2.scss";
import "swiper/css/navigation";
import Portal from "../../../../portal/Portal";
import PortalWindow from "../../../../UI/PortalWindow/PortalWindow";
import { useOnClickOutside } from "../../../../../static/hooks/ClickOutside";
import { Cast } from "../../../../../Types/PersonType";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
type MovieCreditsType = {
    id: string;
};
const MovieCredits: FC<MovieCreditsType> = ({ id }) => {
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
    const { data } = useMovieCreditsQuery({
        param: { ...param, language },
        url: id,
    });
    const { t } = useTranslation();
    const credits = data?.cast
        .filter((el, id) => id < 10)
        .map((el) => (
            <SwiperSlide key={el?.id}>
                {" "}
                <CastCard key={el.id} data={el} />{" "}
            </SwiperSlide>
        ));

    const allCredits = data?.cast.map((el: any) => (
        <CastCard key={el.id} data={el} />
    ));

    if (!data?.cast.length) {
        return null;
    }

    return (
        <div className={s.creditsWrapper}>
            <div>
                {" "}
                <h4>{t("cast")}</h4>
                <ul>
                    <Swiper
                        slidesPerView={"auto"}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {credits}
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
                                <ul className={s.allCredits}>{allCredits}</ul>
                            }
                        />
                    }
                />
            )}
        </div>
    );
};

export default MovieCredits;
