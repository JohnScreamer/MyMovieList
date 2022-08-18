export interface TrendingElementType {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: string[];
}

export interface TrendingType {
    page: number;
    results: TrendingElementType[];
    total_pages: number;
    total_results: number;
}
interface KnownFor {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: string[];
}

export interface PersonTrending {
    adult: boolean;
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string;
    known_for: KnownFor[];
}

export interface PersonTrendingResponse {
    page: number;
    results: PersonTrending[];
    total_pages: number;
    total_results: number;
}
