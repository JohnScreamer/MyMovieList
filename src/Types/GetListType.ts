export interface GetListItemsType {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title: string;
    release_date: string;
    title: string;
    video?: boolean;
}

export interface GetListType {
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    items: GetListItemsType[];
    item_count: number;
    iso_639_1: string;
    name: string;
    poster_path?: any;
}
