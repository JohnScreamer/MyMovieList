import { selectActiveSlide } from "../../selectors/GlobalOptions";
import { useAppSelector } from "./hooks";
import defaultBG from "./../../static/img/BG/NB03CQ.webp";

export const useGetActiveSlide = () => {
    const activeSlide = useAppSelector(selectActiveSlide);

    //@ts-ignore
    const bg = activeSlide?.backdrop_path
        ? //@ts-ignore
          MEDIUM_BACKGROUND_URL + activeSlide?.backdrop_path
        : defaultBG;

    return bg;
};
