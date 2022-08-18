import { FC, useEffect } from "react";
import { useLazyTrendingQuery } from "../../../redux/RTQK/KinoList";
import {
    setActiveSlide,
    setLoadingStatus,
} from "../../../redux/slice/GlobalOptionsSlice";
import {
    selectApiLanguage,
    selectIsLoadingStatus,
    selectorApiOptions,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import { MovieType } from "../../../Types/ApiMoviTypes";
import { PersonTrendingType } from "../../../Types/ApiPersonType";
import { TvType } from "../../../Types/ApiTvTypes";
import { Slider } from "./Slider/Slider";
import s from "./BGSlider.module.scss";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
// type BGSliderType = {
//     setActiveSlide: (
//         media: TvType | MovieType | PersonTrendingType | null
//     ) => void;
// };

const BGSlider: FC = () => {
    const param = useAppSelector(selectorApiOptions);
    const apiLanguage = useAppSelector(selectApiLanguage);
    const dispatch = useAppDispatch();
    const [getTending, { data, isLoading, isError }] = useLazyTrendingQuery();
    useEffect(() => {
        dispatch(setLoadingStatus(isLoading));
    });
    useEffect(() => {
        getTending({
            param,
            url: "all/week",
        });
    }, [apiLanguage]);
    useEffect(() => {
        dispatch(setActiveSlide(data?.results[0] ? data?.results[0] : null));
    }, [data]);
    

    return (
        <div className={s.slider}>
            <Slider
                isLoading={isLoading}
                data={data?.results ? data?.results : []}
                label="Popular"
            />
            {isError && (
                <ErrorPopUp isError text={"Error, cant get trending data."} />
            )}
        </div>
    );
};

export default BGSlider;
