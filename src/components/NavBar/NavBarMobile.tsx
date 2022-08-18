import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBarMobile.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ThemeToggle from "./themeToggle/ThemeToggle";
import Home from "./../../static/img/svg/home.svg";
import LanguageToggle from "./languageToggle/LanguageToggle";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch, useAppSelector } from "../../static/hooks/hooks";
import { setBurgerStatus } from "../../redux/slice/GlobalOptionsSlice";

import { selectBurgerStatus } from "../../selectors/GlobalOptions";
import { useOnClickOutside } from "../../static/hooks/ClickOutside";
import { useTranslation } from "react-i18next";
const NavBar = () => {
    const dispatch = useAppDispatch();
    const navStatus = useAppSelector(selectBurgerStatus);
    const handlerCloseNav = () => {
        dispatch(setBurgerStatus("close"));
    };
    const handlerOpenNav = () => {
        dispatch(setBurgerStatus("open"));
    };
    const handlerOutsideClose = (status: boolean) => {
        dispatch(setBurgerStatus("close"));
    };
    const navRef = useRef(null);
    const { t } = useTranslation();
    return (
        <div className={s.sideBar}>
            {navStatus === "close" && (
                <div
                    className={classNames(s.openSVG, s.iconWrap)}
                    onClick={handlerOpenNav}
                >
                    <ExpandMoreIcon sx={{ width: "100%", height: "100%" }} />
                </div>
            )}
            <nav
                ref={navRef}
                className={classNames(s.navWrapper, {
                    [s.close]: navStatus === "close",
                    [s.open]: navStatus === "open",
                })}
            >
                <div className={s.iconWrap}>
                    <NavLink to={"/"}>
                        <svg
                            className={s.icon}
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.1262 5.52338C14.8029 5.28786 14.3642 5.28786 14.0401 5.52338L8.11793 9.83105V20.6113C8.11793 21.1211 8.5317 21.5349 9.04153 21.5349H10.8887V15.9933C10.8887 14.4629 12.1291 13.2225 13.6595 13.2225H15.5067C17.0371 13.2225 18.2775 14.4629 18.2775 15.9933V21.5349H20.1247C20.6346 21.5349 21.0483 21.1211 21.0483 20.6113V9.83105L15.1262 5.52338ZM22.8955 11.174L24.1997 12.1225C24.6116 12.4227 25.1898 12.3312 25.4899 11.9184C25.7901 11.5065 25.6987 10.9283 25.2858 10.6281L16.2133 4.02992C15.2407 3.32336 13.9255 3.32336 12.953 4.02992L3.88045 10.6281C3.4676 10.9283 3.37709 11.5065 3.67633 11.9184C3.9765 12.3312 4.55468 12.4227 4.9666 12.1225L6.27073 11.174V20.6113C6.27073 22.1417 7.51112 23.3821 9.04153 23.3821H20.1247C21.6551 23.3821 22.8955 22.1417 22.8955 20.6113V11.174ZM16.4303 21.5349V15.9933C16.4303 15.4835 16.0166 15.0697 15.5067 15.0697H13.6595C13.1497 15.0697 12.7359 15.4835 12.7359 15.9933V21.5349H16.4303Z"
                            />
                        </svg>

                        <div className={s.text}>{t("home")}</div>
                    </NavLink>
                </div>
                <div className={s.iconWrap}>
                    <NavLink to={"/search"}>
                        <svg
                            className={s.icon}
                            width="28"
                            height="28"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.72974 16.9595C4.18458 16.9595 0.500008 13.2749 0.500008 8.72973C0.500008 4.18458 4.18458 0.5 8.72974 0.5C13.2749 0.5 16.9595 4.18458 16.9595 8.72973C16.9595 10.6957 16.2701 12.5006 15.12 13.916L21.2506 20.0467C21.5831 20.3791 21.5831 20.9182 21.2506 21.2506C20.9182 21.5831 20.3791 21.5831 20.0467 21.2506L13.916 15.12C12.5006 16.2701 10.6957 16.9595 8.72974 16.9595ZM8.72973 15.2568C12.3345 15.2568 15.2568 12.3345 15.2568 8.72973C15.2568 5.12495 12.3345 2.2027 8.72973 2.2027C5.12496 2.2027 2.20271 5.12495 2.20271 8.72973C2.20271 12.3345 5.12496 15.2568 8.72973 15.2568Z"
                            />
                        </svg>
                        <div className={s.text}>{t("search")}</div>
                    </NavLink>
                </div>
                <div className={s.iconWrap}>
                    <ThemeToggle />
                </div>
                <div className={s.iconWrap}>
                    <LanguageToggle mobile />
                </div>
                <div
                    className={classNames(s.closeSVG, s.iconWrap)}
                    onClick={handlerCloseNav}
                >
                    <ExpandMoreIcon sx={{ width: "100%", height: "100%" }} />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
