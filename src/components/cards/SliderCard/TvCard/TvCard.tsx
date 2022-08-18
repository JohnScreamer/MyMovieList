import { FC } from "react";
import { Link } from "react-router-dom";
import { setActiveSlide } from "../../../../redux/slice/GlobalOptionsSlice";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { useAppDispatch } from "../../../../static/hooks/hooks";
import { CardWrapper } from "../../../../styledComponents/CardWrapper";
import { TvType } from "../../../../Types/ApiTvTypes";
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
            <CardWrapper
                className={s.cardWrapper}
                onMouseOver={handlerSetSlide}
                bg={bg}
            >
                <h3>{tv.name}</h3>
            </CardWrapper>
        </Link>
    );
};

export default TvCard;
