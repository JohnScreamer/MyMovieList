import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import PersonsPage from "../../pages/PersonsPage/PersonsPage";
import TVsPage from "../../pages/TVsPage/TVsPage";
import Spiner from "../UI/Spiner/Spiner";
const QuizPage = React.lazy(() => import("../../pages/QuizPage/QuizPage"));
const SearchPage = React.lazy(
    () => import("../../pages/SearchPage/SearchPage")
);
const Page404 = React.lazy(() => import("../../pages/Page404/Page404"));

const Content = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/search"
                    element={
                        <Suspense fallback={<Spiner />}>
                            <SearchPage />
                        </Suspense>
                    }
                />
                <Route path="/movie/*" element={<MoviesPage />} />
                <Route path="/tv/*" element={<TVsPage />} />
                <Route
                    path="/quiz/*"
                    element={
                        <Suspense fallback={<Spiner />}>
                            <QuizPage />
                        </Suspense>
                    }
                />

                <Route path="/person/*" element={<PersonsPage />} />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Spiner />}>
                            <Page404 />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
};

export default memo(Content);
