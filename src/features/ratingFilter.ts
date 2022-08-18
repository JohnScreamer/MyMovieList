import { PersonType } from "../Types/PersonType";

export interface RatingFilterType {
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    id: number;
    release_date?: string;
    first_air_date?: string;
}

export function getFiltered(
    data: Array<RatingFilterType>,
    minCount: number,
    elemNum: number = 15
) {
    const rating = data
        .filter((el) => el.vote_average && el.vote_count > minCount)
        .sort((a, b) => b.vote_average - a.vote_average)
        .slice(0, elemNum);
    let uniqElem: Array<RatingFilterType> = [];
    let uniqAllElem: Array<RatingFilterType> = [];
    const allWithBg = rating.filter((el) => el.backdrop_path);
    const bg = allWithBg[getRandomArbitrary(0, allWithBg.length)];

    rating.forEach((el: RatingFilterType) => {
        if (!uniqElem.find((el2: RatingFilterType) => el2.id === el.id)) {
            uniqElem = [...uniqElem, el];
        }
    });
    data.forEach((el: RatingFilterType) => {
        if (!uniqAllElem.find((el2: RatingFilterType) => el2.id === el.id)) {
            uniqAllElem = [...uniqAllElem, el];
        }
    });

    const newFirst = [...uniqAllElem].sort(
        (a, b) => validDate(b) - validDate(a)
    );
    const hightRating = [...uniqAllElem].sort(
        (a, b) => b.vote_average - a.vote_average
    );

    return { rating: uniqElem, bg, uniqAllElem, newFirst, hightRating };
}

///////////////////////////////////////////////////////////////////////
function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getDate(str: string) {
    let [y, m, d] = str.split("-").map((el) => Number(el));
    return new Date(y, m, d).getTime();
}

export function validDate(el: RatingFilterType | undefined) {
    let data = el?.first_air_date || el?.release_date;

    if (data) {
        return getDate(data);
    }

    return 0;
}
export function validPersonDateBirthday(el: PersonType | undefined) {
    if (el?.birthday) {
        return getDate(el?.birthday);
    }

    return 0;
}
export function validPersonDateDeathday(el: PersonType | undefined) {
    if (el?.deathday) {
        return getDate(el?.deathday);
    }

    return 0;
}

export function validPostDate(params: string) {
    if (params) {
        return getDate(params);
    }
}
