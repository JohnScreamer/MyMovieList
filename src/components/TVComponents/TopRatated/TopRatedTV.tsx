import { useTopRatedTVQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./TopRatedTV.module.scss";

const TopRatedTV = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useTopRatedTVQuery({
        param: {
            ...apiParam,
            language: language,
        },
    });
    const topRatedList = data?.results.map((el, id) => (
        <DiscoverCard tv={el} id={id + 1} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : topRatedList}
            {isError && (
                <ErrorPopUp
                    isError
                    text={"Error, cant get top rated tv data."}
                />
            )}
        </div>
    );
};

export default TopRatedTV;
