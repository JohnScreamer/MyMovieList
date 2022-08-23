import { FC } from "react";
import { Link } from "react-router-dom";
import { TINY_POSTER_URL } from "../../../static/constants/URL";
import { Cast, TVCredits } from "../../../Types/TVType";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
import NO_AVA from "./../../../static/img/noavatar1.png";
import s from "./CastTVCard.module.scss";

type CastTVCardType = {
    data: Cast;
};
const CastTVCard: FC<CastTVCardType> = ({ data }) => {
    return (
        <Link to={`/person/id/${data.id}`}>
            <li key={data.id} className={s.CastTVCardWrapper}>
                {/* <LazyLoadImg
                    src={
                        data?.profile_path
                            ? TINY_POSTER_URL + data.profile_path
                            : NO_AVA
                    }
                /> */}
                <img
                    src={
                        data?.profile_path
                            ? TINY_POSTER_URL + data.profile_path
                            : NO_AVA
                    }
                />
                <div className={s.info}>
                    <h3>{data.name}</h3>
                    <b>{data.character}</b>
                </div>
            </li>
        </Link>
    );
};

export default CastTVCard;
