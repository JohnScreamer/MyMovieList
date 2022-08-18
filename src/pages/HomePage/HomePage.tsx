import BGSlider from "../../components/HomePageComponents/BGSlider/BGSlider";
import PreviewSlider from "../../components/HomePageComponents/PreviewSlide/PreviewSlide";
import HomeHeader from "../../components/HomePageComponents/HomeHeader/HomeHeader";
import { SlideType } from "../../Types/common";
import { FC } from "react";
import s from "./HomePage.module.scss";
type HomePage = {};
const HomePage: FC<HomePage> = () => {
    return (
        <div className={s.homeWrapper}>
            <HomeHeader />
            <div className={s.content}>
                <PreviewSlider />
                <BGSlider />
            </div>
        </div>
    );
};

export default HomePage;
