import { Cast, PersonType } from "../Types/PersonType";
import {
    validDate,
    validPersonDateBirthday,
    validPersonDateDeathday,
    validPostDate,
} from "./ratingFilter";

export const isRelease = (el: Cast) => {
    const time = validDate(el);
    const currentDate = new Date().getTime();
    if (!time) {
        return "-";
    }
    const strDate = `${new Date(time).getFullYear()}, ${new Date(
        time
    ).toLocaleString(localStorage.getItem("language") || "en-US", {
        month: "long",
    })}${new Date(time).getDay() ? ", " + new Date(time).getDay() : ""}`;
    return strDate;
};
export const getValidPersonDate = (el: Cast) => {
    const time = validDate(el);
    const currentDate = new Date().getTime();
    if (!time) {
        return "-";
    }
    const strDate = `${new Date(time).getFullYear()}, ${new Date(
        time
    ).toLocaleString(localStorage.getItem("language") || "en-US", {
        month: "long",
    })}${new Date(time).getDay() ? ", " + new Date(time).getDay() : ""}`;
    return strDate;
};
export const getValidPersonDeathDay = (el: PersonType) => {
    const time = validPersonDateDeathday(el);
    const currentDate = new Date().getTime();
    if (!time) {
        return "-";
    }
    const strDate = `${new Date(time).getFullYear()}, ${new Date(
        time
    ).toLocaleString(localStorage.getItem("language") || "en-US", {
        month: "long",
    })}${new Date(time).getDay() ? ", " + new Date(time).getDay() : ""}`;
    return strDate;
};
export const getValidPersonBirthDay = (el: PersonType) => {
    const time = validPersonDateBirthday(el);
    const currentDate = new Date().getTime();
    if (!time) {
        return "-";
    }
    const strDate = `${new Date(time).getFullYear()}, ${new Date(
        time
    ).toLocaleString(localStorage.getItem("language") || "en-US", {
        month: "long",
    })}${new Date(time).getDay() ? ", " + new Date(time).getDay() : ""}`;
    return strDate;
};
export const getValidPostTime = (unix: string) => {
    const time = validPostDate(unix);

    if (!time) {
        return "-";
    }
    const strDate = `${new Date(time).getFullYear()}, ${new Date(
        time
    ).toLocaleString(localStorage.getItem("language") || "ukr", {
        month: "long",
    })}${new Date(time).getDay() ? ", " + new Date(time).getDay() : ""}`;
    return strDate;
};
