import React from "react";
import { switchTheme } from "../../../redux/slice/GlobalOptionsSlice";
import { selectorTheme } from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import s from "./ThemeToggle.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTranslation } from "react-i18next";
const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector(selectorTheme);

    const handlerToggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        dispatch(switchTheme(newTheme));
        localStorage.setItem("theme", newTheme);
    };

    const { t } = useTranslation();
    return (
        <div className={s.themeWrapper} onClick={handlerToggleTheme}>
            {currentTheme === "light" ? (
                <>
                    <DarkModeIcon />
                    <span>{t("darkMode")}</span>
                </>
            ) : (
                <>
                    {" "}
                    <WbSunnyIcon />
                    <span>{t("lightMode")}</span>
                </>
            )}
        </div>
    );
};

export default ThemeToggle;
