import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLazySearchQuery } from "../../../redux/RTQK/KinoList";
import {
    selectApiLanguage,
    selectorApiOptions,
    selectorLanguage,
} from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import {
    ISearchResponse,
    ISearchMovie,
    ISearchTV,
    MediaTypes,
} from "../../../Types/common";
import Portal from "../../portal/Portal";
import CustomButton from "../../UI/buttons/customButton/CustomButton";
import CustomRadioBtn from "../../UI/buttons/radioBtn/CustomRadioBtn";
import ErrorPopUp from "../../UI/ErrorPopUp/ErrorPopUp";
import Input from "../../UI/input/Input";
import s from "./SearchBlock.module.scss";
type SearchBlockType = {
    setSearchData: (data: {
        searchData: ISearchResponse<ISearchTV, ISearchTV, ISearchMovie>;
        mediaType: MediaTypes;
    }) => void;
    currentPage: number;
    setTotalPage: (num: number) => void;
    setTotalElem: (num: number | null) => void;
    setLoadingStatus: (status: boolean) => void;
};

const SearchBlock: FC<SearchBlockType> = ({
    setSearchData,
    currentPage,
    setTotalPage,
    setTotalElem,
    setLoadingStatus,
}) => {
    const param = useAppSelector(selectorApiOptions);
    const firstRender = useRef(false);
    const language = useAppSelector(selectApiLanguage);
    const [mediaType, setMediaType] = useState<MediaTypes>(
        (sessionStorage.getItem("MediaType") as MediaTypes) || "movie"
    );
    const [searchValue, setSearchValue] = useState(
        sessionStorage.getItem("searchText") || ""
    );
    const [getSearchData, { data: searchData, isLoading, isError }] =
        useLazySearchQuery();
    const handlerSearch = () => {
        getSearchData({
            param: {
                ...param,
                page: currentPage,
                query: searchValue,
                language: language,
            },
            url: mediaType,
        });
    };
    useEffect(() => {
        if (firstRender.current)
            getSearchData({
                param: {
                    ...param,
                    page: currentPage,
                    query: searchValue,
                    language: language,
                },
                url: mediaType,
            });
    }, [language, currentPage]);

    useEffect(() => {
        //@ts-ignore
        if (firstRender.current) setSearchData({ searchData, mediaType });
        firstRender.current = true;
    }, [searchData]);
    useEffect(() => {
        setTotalElem(
            searchData?.total_results
                ? searchData?.total_results
                : searchData?.total_results === 0
                ? 0
                : null
        );
        setTotalPage(searchData?.total_pages || 1);
        setLoadingStatus(isLoading);
    });
    const handlerSetSearchText = (text: string) => {
        setSearchValue(text);
        sessionStorage.setItem("searchText", text);
    };
    const handlerSetMediaType = (value: MediaTypes) => {
        setMediaType(value);
        sessionStorage.setItem("MediaType", value);
    };
    const { t } = useTranslation();
    return (
        <div className={s.searchBlockWrapper}>
            <Input value={searchValue} onChange={handlerSetSearchText} active />
            {!!searchValue && (
                <Portal
                    component={
                        <div className={s.btnContainer}>
                            <CustomButton
                                name="Search"
                                searchFN={handlerSearch}
                            />
                        </div>
                    }
                />
            )}

            <div className={s.btnWrapper}>
                <CustomRadioBtn
                    currentValue={mediaType}
                    value="movie"
                    onChange={handlerSetMediaType}
                    name={t("movie")}
                />
                <CustomRadioBtn
                    currentValue={mediaType}
                    value="tv"
                    onChange={handlerSetMediaType}
                    name={t("tv")}
                />
                <CustomRadioBtn
                    currentValue={mediaType}
                    value="person"
                    onChange={handlerSetMediaType}
                    name={t("persons")}
                />
            </div>
            {isError && (
                <ErrorPopUp isError text={"Error, cant find search data."} />
            )}
        </div>
    );
};

export default SearchBlock;
