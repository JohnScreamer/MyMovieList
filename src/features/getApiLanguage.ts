export const getApiLanguage = () => {
    const LSLang = localStorage.getItem("languageApi") || "en-US";
    return LSLang as "ru" | "en-US";
};
