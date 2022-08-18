import { useOnAirTVQuery } from "../../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import DiscoverCard from "../../cards/DiscoverCard/DiscoverCard";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Spiner from "../../UI/Spiner/Spiner";
import s from "./OnAir.module.scss";
const OnAir = () => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const { data, isLoading, isError } = useOnAirTVQuery({
        param: {
            ...apiParam,
            language: language,
        },
        url: "",
    });
    const onAirTV = data?.results.map((el, id) => (
        <DiscoverCard tv={el} key={id} />
    ));

    return (
        <div className={s.wrapper}>
            {isLoading ? <Spiner /> : onAirTV}{" "}
            {isError && (
                <ErrorPopUp isError text={"Error, cant on air data."} />
            )}
        </div>
    );
};

export default OnAir;
