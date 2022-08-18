import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomeHeader from "../../components/HomePageComponents/HomeHeader/HomeHeader";
import AnimeList from "../../components/TVComponents/AnimeList/AnimeList";
import PopularTV from "../../components/TVComponents/Popular/PopularTV";
import TopRatedTV from "../../components/TVComponents/TopRatated/TopRatedTV";
import TopTVAuthor from "../../components/TVComponents/TopTVAuthor/TopTVAuthor";
import { TV } from "../../components/TVComponents/TV";
import TVID from "../../components/TVComponents/TVID/TVID";
type TVsPageType = {};

const TVsPage: FC<TVsPageType> = () => {
    return (
        <div style={{ height: "100%" }}>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<TV />} />
                <Route path="/id/:id" element={<TVID />} />

                <Route path="/popular" element={<PopularTV />} />
                <Route path="/top_rated" element={<TopRatedTV />} />
                <Route path="/anime_list" element={<AnimeList />} />
                <Route path="/top_author_list" element={<TopTVAuthor />} />
            </Routes>
        </div>
    );
};

export default TVsPage;
