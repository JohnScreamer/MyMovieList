import { useEffect, useState } from "react";
import HomeHeader from "../../components/HomePageComponents/HomeHeader/HomeHeader";
import SearchBlock from "../../components/SearchComponents/SearchBlock/SearchBlock";
import SearchList from "../../components/SearchComponents/SearchList/SearchList";
import { setActiveSlide } from "../../redux/slice/GlobalOptionsSlice";
import { defaultSearchParam } from "../../static/constants/DefaultOption";
import { useAppDispatch } from "../../static/hooks/hooks";
import { ISearchData, SlideType } from "../../Types/common";
import s from "./SearchPage.module.scss";
import bg from "./../../static/img/BG/NB03CQ.webp";

const SearchPage = () => {
    const [searchData, setSearchData] =
        useState<ISearchData>(defaultSearchParam);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [totalElem, setTotalElem] = useState<null | number>(null);
    const [isLoading, setLoadingStatus] = useState(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setActiveSlide({ backdrop_path: bg } as SlideType));
    }, []);
    return (
        <div className={s.searchPage}>
            <HomeHeader />
            <div className={s.searchContainer}>
                <SearchBlock
                    setSearchData={setSearchData}
                    currentPage={currentPage}
                    setTotalPage={setTotalPage}
                    setTotalElem={setTotalElem}
                    setLoadingStatus={setLoadingStatus}
                />
                <SearchList
                    searchData={searchData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPage={totalPage}
                    totalFindElem={totalElem}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};

export default SearchPage;
