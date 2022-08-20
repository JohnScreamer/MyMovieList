import {
    selectActiveSlide,
    selectIsSlideActive,
} from "../../selectors/GlobalOptions";
import { useAppSelector } from "./hooks";
import defaultBG from "./../../static/img/BG/NB03CQ.webp";
import { MEDIUM_BACKGROUND_URL } from "../constants/URL";

export const useGetActiveSlide = () => {
    const activeSlide = useAppSelector(selectActiveSlide);
    const isSlideActive = useAppSelector(selectIsSlideActive);

    let bg = "";
    if (isSlideActive && activeSlide?.backdrop_path) {
        bg = activeSlide?.backdrop_path?.startsWith("/static/")
            ? activeSlide?.backdrop_path
            : MEDIUM_BACKGROUND_URL + activeSlide?.backdrop_path;
    }
    return bg;
};
