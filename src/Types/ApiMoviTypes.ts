export type MovieType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
};

export interface IMovieSearch {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}
