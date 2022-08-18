import React from "react";
import s from "./Page404.module.scss";
import notFound from "./../../static/img/minions_PNG20.png";
import matrix from "./../../static/img/natruxjpg.jpg";
import cinema from "./../.././static/img/3968016.webp";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
const Page404 = () => {
    const { t } = useTranslation();
    return (
        <div className={s.wrapper}>
            <img className={s.cinema} src={cinema} />
            <div className={s.sign} style={{ background: `url(${matrix})` }}>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <Link to={"/"}>{t("home")}</Link>
            </div>
            <div className={s.imgWrapper}>
                <img src={notFound} />
            </div>
        </div>
    );
};

export default Page404;
