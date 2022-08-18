import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { ISearchTV } from "./../../../../Types/common";
import s from "./SearchTV.module.scss";
import noPoster from "./.././../../../static/img/noPoster.png";
import { Link } from "react-router-dom";
type SearchTVType = {
    tvData: ISearchTV;
};
const SearchTV: FC<SearchTVType> = ({ tvData }) => {
    if (!tvData) {
        return null;
    }
    return (
        <li className={s.cardWrapper}>
            <Link to={`/tv/id/${tvData.id}`}>
                <div className={s.imgContainer}>
                    {tvData.poster_path ? (
                        <img src={SMALL_POSTER_URL + tvData.poster_path} />
                    ) : (
                        <img src={noPoster} alt="" />
                    )}
                </div>
            </Link>
            <div className={s.text}>
                <Link to={`/tv/id/${tvData.id}`}>
                    <h3>{tvData.name}</h3>
                </Link>
                <p>{tvData.overview}</p>
            </div>
            {tvData.first_air_date && (
                <span>{tvData.first_air_date.slice(0, 4)}</span>
            )}
        </li>
    );
};

export default SearchTV;
