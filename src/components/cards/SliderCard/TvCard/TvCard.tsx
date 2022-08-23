import { FC } from "react";
import { Link } from "react-router-dom";
import { setActiveSlide } from "../../../../redux/slice/GlobalOptionsSlice";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { useAppDispatch } from "../../../../static/hooks/hooks";
import { CardWrapper } from "../../../../styledComponents/CardWrapper";
import { TvType } from "../../../../Types/ApiTvTypes";
import LazyLoadImg from "../../../UI/LazyLoadImg/LazyLoadImg";
import s from "./TvCard.module.scss";
type TvCardType = {
    tv: TvType;
};
const TvCard: FC<TvCardType> = ({ tv }) => {
    const bg = SMALL_POSTER_URL + tv.poster_path;
    const dispatch = useAppDispatch();
    const screenWidth = window.screen.width;
    const handlerSetSlide = () => {
        if (screenWidth > 786) dispatch(setActiveSlide(tv));
    };
    return (
        <Link to={`/tv/id/${tv.id}`}>
            <div className={s.cardWrapper} onMouseOver={handlerSetSlide}>
                <div className={s.decor}>
                    <h3>{tv.name}</h3>
                </div>
                <LazyLoadImg src={bg} />
            </div>
        </Link>
    );
};

export default TvCard;
