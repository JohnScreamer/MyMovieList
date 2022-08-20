import React, { FC, useEffect, useRef, useState } from "react";
import { selectorLanguage } from "../../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../../static/hooks/hooks";
import LanguageIcon from "@mui/icons-material/Language";
import s from "./LanguageToggle.module.scss";
import { switchLanguage } from "../../../redux/slice/GlobalOptionsSlice";
import { useOnClickOutside } from "../../../static/hooks/ClickOutside";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
type LanguageToggleType = {
    mobile?: boolean;
};
const LanguageToggle: FC<LanguageToggleType> = ({ mobile }) => {
    const currentLanguage = useAppSelector(selectorLanguage);
    const dispatch = useAppDispatch();
    const [langStatus, setLangStatus] = useState(false);
    const handlerLangStatus = () => {
        setLangStatus((prev) => !prev);
    };
    const handlerToggleLang = (lang: "ua" | "en-US") => {
        dispatch(switchLanguage(lang));
    };
    const refLang = useRef(null);
    // useEffect(()=>{
    //     window.location.reload()
    // },[])
    const ClickOutside = useOnClickOutside(refLang, setLangStatus);
    const { t } = useTranslation();
    if (mobile) {
        return (
            <div
                className={s.langWrapper}
                ref={refLang}
                onClick={handlerLangStatus}
            >
                <div className={s.icon}>
                    <LanguageIcon />
                    <span>{t("language")}</span>
                </div>
                {langStatus && (
                    <div className={s.langListMobile}>
                        <img
                            className={currentLanguage === "ua" ? s.active : ""}
                            src="https://img.icons8.com/fluency/48/000000/ukraine-circular.png"
                            onClick={() => {
                                handlerToggleLang("ua");
                                i18next.changeLanguage("ua");
                            }}
                        />
                        <img
                            className={
                                currentLanguage === "en-US" ? s.active : ""
                            }
                            src="https://img.icons8.com/fluency/48/000000/great-britain-circular.png"
                            onClick={() => {
                                handlerToggleLang("en-US");
                                i18next.changeLanguage("en-US");
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={s.langWrapper}
            ref={refLang}
            onClick={handlerLangStatus}
        >
            <div className={s.icon}>
                <LanguageIcon />
                <span>{t("language")}</span>
            </div>
            {langStatus && (
                <div className={s.langList}>
                    <img
                        className={currentLanguage === "ua" ? s.active : ""}
                        src="https://img.icons8.com/fluency/48/000000/ukraine-circular.png"
                        onClick={() => {
                            handlerToggleLang("ua");
                            i18next.changeLanguage("ua");
                        }}
                    />
                    <img
                        className={currentLanguage === "en-US" ? s.active : ""}
                        src="https://img.icons8.com/fluency/48/000000/great-britain-circular.png"
                        onClick={() => {
                            handlerToggleLang("en-US");
                            i18next.changeLanguage("en-US");
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default LanguageToggle;
