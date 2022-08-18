import { PersonCombinedCredits, PersonType } from "./../../Types/PersonType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieSearch, MovieType } from "../../Types/ApiMoviTypes";
import { TrendingType } from "../../Types/ApiTrendigTypes";
import { SearchTvType } from "../../Types/ApiTvTypes";
import {
    GetMovieType,
    MovieCreditsType,
    SimilarMovieType,
} from "../../Types/MovieType";
import { TVCredits, TVSimilarType, TVType } from "../../Types/TVType";
import { ISearchMovie, ISearchResponse, ISearchTV } from "../../Types/common";
import {
    DiscoveryMovieResponse,
    DiscoveryTVresponse,
} from "../../Types/DiscoveryType";
import { GetListType } from "../../Types/GetListType";
import { MovieReviewResponse } from "../../Types/Reviews";
import { PersonImg, PersonImgResponse } from "../../Types/GetImgTypes";

type OptionType = {
    url?: string | number;
    param: {
        api_key: string;
        language: "ru" | "en-US";
        page?: number;
        query?: string;
        year?: number;
        sort_by?: string;
        [`vote_count.gte`]?: number;
    };
};

export const KinoList = createApi({
    reducerPath: "KinoList",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/",
    }),
    endpoints: (builder) => ({
        trending: builder.query<TrendingType, OptionType>({
            query: (options: OptionType) => ({
                url: `trending/${options.url}`,
                params: options.param,
            }),
        }),
        movie: builder.query<GetMovieType, OptionType>({
            query: (options: OptionType) => ({
                url: `movie/${options.url}`,
                params: options.param,
            }),
        }),
        movieCredits: builder.query<MovieCreditsType, OptionType>({
            query: (options: OptionType) => ({
                url: `movie/${options.url}/credits`,
                params: options.param,
            }),
        }),
        movieSimilar: builder.query<SimilarMovieType, OptionType>({
            query: (options: OptionType) => ({
                url: `movie/${options.url}/similar`,
                params: options.param,
            }),
        }),
        tv: builder.query<TVType, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/${options.url}`,
                params: options.param,
            }),
        }),
        tvCredits: builder.query<TVCredits, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/${options.url}/credits`,
                params: options.param,
            }),
        }),
        TVSimilar: builder.query<TVSimilarType, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/${options.url}/similar`,
                params: options.param,
            }),
        }),
        person: builder.query<PersonType, OptionType>({
            query: (options: OptionType) => ({
                url: `person/${options.url}`,
                params: options.param,
            }),
        }),
        personCombinedCredits: builder.query<PersonCombinedCredits, OptionType>(
            {
                query: (options: OptionType) => ({
                    url: `person/${options.url}/combined_credits`,
                    params: options.param,
                }),
            }
        ),
        search: builder.query<
            ISearchResponse<ISearchTV, ISearchTV, ISearchMovie>,
            OptionType
        >({
            query: (options: OptionType) => ({
                url: `search/${options.url}`,
                params: options.param,
            }),
        }),
        MovieDiscover: builder.query<DiscoveryMovieResponse, OptionType>({
            query: (options: OptionType) => ({
                url: `discover/movie/${options.url}`,
                params: options.param,
            }),
        }),
        TVDiscover: builder.query<DiscoveryTVresponse, OptionType>({
            query: (options: OptionType) => ({
                url: `discover/tv/${options.url}`,
                params: options.param,
            }),
        }),
        TopRatedTV: builder.query<DiscoveryTVresponse, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/top_rated`,
                params: options.param,
            }),
        }),
        popularTV: builder.query<DiscoveryTVresponse, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/popular`,
                params: options.param,
            }),
        }),
        OnAirTV: builder.query<DiscoveryTVresponse, OptionType>({
            query: (options: OptionType) => ({
                url: `tv/on_the_air`,
                params: options.param,
            }),
        }),
        getList: builder.query<GetListType, OptionType>({
            query: (options: OptionType) => ({
                url: `list/${options.url}`,
                params: options.param,
            }),
        }),
        Reviews: builder.query<MovieReviewResponse, OptionType>({
            query: (options: OptionType) => ({
                url: `${options.url}/reviews`,
                params: { ...options.param, language: "en-US" },
            }),
        }),
        PersonImg: builder.query<PersonImgResponse, OptionType>({
            query: (options: OptionType) => ({
                url: `person/${options.url}/images`,
                params: options.param,
            }),
        }),
    }),
});
export const {
    useLazyTrendingQuery,
    useMovieQuery,
    usePersonQuery,
    useTvQuery,
    useMovieCreditsQuery,
    useLazySearchQuery,
    useTvCreditsQuery,
    useMovieSimilarQuery,
    useTVSimilarQuery,
    usePersonCombinedCreditsQuery,
    useTVDiscoverQuery,
    useMovieDiscoverQuery,
    useTopRatedTVQuery,
    usePopularTVQuery,
    useOnAirTVQuery,
    useGetListQuery,
    useTrendingQuery,
    useLazyReviewsQuery,
    usePersonImgQuery,
} = KinoList;
