import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import Page404 from "../../pages/Page404/Page404";
import PersonsPage from "../../pages/PersonsPage/PersonsPage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import TVsPage from "../../pages/TVsPage/TVsPage";

const Content = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/movie/*" element={<MoviesPage />} />
                <Route path="/tv/*" element={<TVsPage />} />
                <Route path="/person/*" element={<PersonsPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};

export default memo(Content);
