import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomeHeader from "../../components/HomePageComponents/HomeHeader/HomeHeader";
import AuthorMovieTop from "../../components/MovieComponents/AuthorMovieTop/AuthorMovieTop";
import MostVotedMovies from "../../components/MovieComponents/MostVotedMovies/MostVotedMovies";
import Movie from "../../components/MovieComponents/Movie";
import MovieID from "../../components/MovieComponents/MovieID/MovieID";
import PopularMovie from "../../components/MovieComponents/Popular/PopularMovie";
import TopratedMovie from "../../components/MovieComponents/TopRatated/TopratedMovie";
import WorstMovie from "../../components/MovieComponents/WorstMovie/WorstMovie";
import s from "./MoviesPage.module.scss";

type MoviesPageType = {};

const MoviesPage: FC<MoviesPageType> = () => {
    return (
        <div className={s.moviePage}>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<Movie />} />
                <Route path="/id/:id" element={<MovieID />} />
                <Route path="/popular" element={<PopularMovie />} />
                <Route path="/worstMovies" element={<WorstMovie />} />
                <Route path="/topRated" element={<TopratedMovie />} />
                <Route path="/author_movie_top" element={<AuthorMovieTop />} />
                <Route path="/mostVoted" element={<MostVotedMovies />} />
            </Routes>
        </div>
    );
};

export default MoviesPage;
