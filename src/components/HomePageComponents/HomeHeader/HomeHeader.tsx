import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./HomeHeader.module.scss";
const HomeHeader = () => {
    const { t } = useTranslation();
    return (
        <header className={s.header}>
            <NavLink to={"/movie"}>{t("movies")}</NavLink>
            <NavLink to={"/tv"}>{t("tvShow")}</NavLink>
            <NavLink to={"/person"}>{t("persons")}</NavLink>
        </header>
    );
};

export default memo(HomeHeader);
