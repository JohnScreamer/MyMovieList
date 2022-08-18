import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { EN } from "../static/language/EN";
import { UA } from "../static/language/UA";

type langTypeName = string | null;
const defaultLang: langTypeName = localStorage.getItem("language") || null;
export default i18next.use(initReactI18next).init({
    resources: {
        ["en-US"]: {
            translation: EN,
        },
        ua: {
            translation: UA,
        },
    },

    lng: defaultLang || "en-US",
    fallbackLng: defaultLang || "en-US",

    interpolation: { escapeValue: false },
});
