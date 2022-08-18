import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TVType } from "../../../../Types/TVType";
import s from "./TVHeader.module.scss";
type TVHeaderType = {
    data: TVType;
};
const TVHeader: FC<TVHeaderType> = ({ data }) => {
    const { t } = useTranslation();

    return (
        <header className={s.headerWrapper}>
            <h1>{data.name}</h1>
            <h2>
                {t("originTitle")}
                {data.original_name}
            </h2>
        </header>
    );
};

export default TVHeader;
