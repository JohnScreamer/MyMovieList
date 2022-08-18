export type ThemeType = "dark" | "light";

export const getTheme = (): ThemeType => {
    const theme = `${window?.localStorage?.getItem("theme")}`;
    if (["light", "dark"].includes(theme)) return theme as ThemeType;

    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) return "light";

    return "dark";
};
