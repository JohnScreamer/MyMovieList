import React, { FC, memo } from "react";
import {
    ISearchData,
    ISearchMovie,
    ISearchPerson,
    ISearchTV,
} from "../../../Types/common";
import SearchMovie from "../../cards/SearchCard/SearchMovie/SearchMovie";
import SearchTV from "../../cards/SearchCard/SearchTV/SearchTV";
import SearchPerson from "../../cards/SearchCard/SearchPerson/SearchPerson";
import s from "./SearchList.module.scss";
import ErrorIcon from "@mui/icons-material/Error";
import Pagination from "@mui/material/Pagination/Pagination";
import Stack from "@mui/material/Stack/Stack";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@mui/material";
import Loader from "./../../../static/img/svg/Spinner-1s-200px.svg";
import Spiner from "../../UI/Spiner/Spiner";
type SearchListType = {
    searchData: ISearchData;
    currentPage: number;
    setCurrentPage: (num: number) => void;
    totalPage: number;
    totalFindElem: number | null;
    isLoading: boolean;
};

const SearchList: FC<SearchListType> = memo(
    ({
        searchData,
        currentPage,
        setCurrentPage,
        totalPage,
        totalFindElem,
        isLoading,
    }) => {
        let searchList;
        switch (searchData.mediaType) {
            case "tv":
                searchList = searchData.searchData?.results.map((el: any) => (
                    <SearchTV tvData={el} key={el.id} />
                ));
                break;

            case "movie":
                searchList = searchData.searchData?.results.map((el: any) => (
                    <SearchMovie movieData={el} key={el.id} />
                ));
                break;

            case "person":
                searchList = searchData.searchData?.results.map((el: any) => (
                    <SearchPerson personData={el} key={el.id} />
                ));
                break;

            default:
                break;
        }

        const { t } = useTranslation();
        return (
            <div className={s.listWrapper}>
                <div className={s.container}>
                    {totalFindElem ? (
                        <div className={s.find}>Finds:{totalFindElem}</div>
                    ) : null}
                    {totalFindElem === 0 ? (
                        <div className={s.notFind}>
                            <ErrorIcon className={s.icon} />
                            <h3>{t("notFound")}</h3>
                        </div>
                    ) : null}

                    {totalPage > 1 && (
                        <Stack spacing={2}>
                            <Pagination
                                count={totalPage}
                                page={currentPage}
                                color={"secondary"}
                                onChange={(_, num: number) =>
                                    setCurrentPage(num)
                                }
                            />
                        </Stack>
                    )}
                    {isLoading && (
                        <ul className={s.list}>
                            <Spiner />
                        </ul>
                    )}
                    <ul className={s.list}>{searchList}</ul>

                    {totalPage > 1 && (
                        <Pagination
                            count={totalPage}
                            page={currentPage}
                            color={"secondary"}
                            onChange={(_, num: number) => setCurrentPage(num)}
                        />
                    )}
                </div>
            </div>
        );
    }
);

export default SearchList;
