import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
    usePersonCombinedCreditsQuery,
    usePersonQuery,
} from "../../../redux/RTQK/KinoList";
import { setActiveSlide } from "../../../redux/slice/GlobalOptionsSlice";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import { getFiltered } from "../../../features/ratingFilter";
import { SlideType } from "../../../Types/common";
import { Cast } from "../../../Types/PersonType";
import BasicInfo from "./BasicInfo/BasicInfo";
import Filmography from "./Filmography/Filmography";
import s from "./PersonID.module.scss";
import PersonSkeleton from "../../skeleton/PersonSkeleton";
import classNames from "classnames";
import ImgList from "./ImgList/ImgList";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";

const PersonID = () => {
    const param = useParams().id || "";

    const apiOption = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = usePersonQuery({
        param: { ...apiOption, language },
        url: param,
    });
    const { data: combineCredits } = usePersonCombinedCreditsQuery({
        param: { ...apiOption, language },
        url: param,
    });

    const { bg, hightRating, newFirst, rating } = useMemo(
        () =>
            getFiltered(
                combineCredits?.cast ? combineCredits?.cast : [],
                50,
                8
            ),
        [combineCredits?.cast]
    );

    useEffect(() => {
        dispatch(setActiveSlide(bg as unknown as SlideType));
    }, [bg]);

    return (
        <div className={classNames(s.personWrapper)}>
            <div className={s.container}>
                {isLoading ? (
                    <PersonSkeleton />
                ) : (
                    <div className={classNames(s.loadingEnd)}>
                        <BasicInfo
                            data={data ? data : null}
                            filmData={rating as unknown as Array<Cast>}
                        />
                        <ImgList id={Number(param)} />
                        <Filmography
                            hightRating={hightRating as Array<Cast>}
                            byDate={newFirst as Array<Cast>}
                        />
                    </div>
                )}
            </div>
            {isError && (
                <ErrorPopUp isError text={"Error, cant get person data."} />
            )}
        </div>
    );
};

export default PersonID;
