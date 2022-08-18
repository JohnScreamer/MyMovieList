import { MovieType } from "./ApiMoviTypes";
import { PersonTrendingType } from "./ApiPersonType";
import { TvType } from "./ApiTvTypes";

export type SlideType = TvType | MovieType | null;
export type MediaTypes = "tv" | "person" | "movie";
export interface ISearchData {
    searchData: ISearchResponse<ISearchTV, ISearchTV, ISearchMovie> | null;
    mediaType: MediaTypes;
}
export interface KnownFor {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    first_air_date: string;
    origin_country: string[];
    name: string;
    original_name: string;
}

export interface ISearchAll {
    poster_path: string;
    popularity: number;
    id: number;
    overview: string;
    backdrop_path: string;
    vote_average: number;
    media_type: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
    adult?: boolean;
    release_date: string;
    original_title: string;
    title: string;
    video?: boolean;
    profile_path: string;
    known_for: KnownFor[];
}

export interface ISearchMovie {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}
export interface ISearchTV {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}
export interface ISearchPerson {
    profile_path: string;
    adult: boolean;
    id: number;
    known_for: KnownFor[];
    name: string;
    popularity: number;
}

export interface ISearchResponse<T, G, H> {
    page: number;
    results: Array<T | G | H>;
    total_results: number;
    total_pages: number;
}
export type ISearchAllType = ISearchTV | ISearchMovie | ISearchPerson;
