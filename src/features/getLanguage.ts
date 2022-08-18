export const getLanguage = () => {
    const langData = localStorage.getItem("language") || "en-US";
    return langData as "ua" | "en-US";
};
