export interface DiscoveryMovie {
    poster_path?: any;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path?: any;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface DiscoveryMovieResponse {
    page: number;
    results: DiscoveryMovie[];
    total_results: number;
    total_pages: number;
}

export interface DiscoveryTV {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path?: any;
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

export interface DiscoveryTVresponse {
    page: number;
    results: DiscoveryTV[];
    total_results: number;
    total_pages: number;
}
