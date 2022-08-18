import { FC } from "react";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { ISearchPerson } from "./../../../../Types/common";
import s from "./SearchPerson.module.scss";
import noAva from "./../../../../static/img/noavatar1.png";
import { Link } from "react-router-dom";
type SearchPersonType = {
    personData: ISearchPerson;
};

const SearchPerson: FC<SearchPersonType> = ({ personData }) => {
    const knowFor = personData?.known_for.map((el) => {
        if (el.title) {
            return (
                <Link to={`/movie/id/${el.id}`} key={el.id} className={s.link}>
                    "{el.title}"
                </Link>
            );
        }
        if (el.name) {
            return (
                <Link to={`/tv/id/${el.id}`} key={el.id} className={s.link}>
                    "{el.name}"
                </Link>
            );
        }
    });

    return (
        <li className={s.cardWrapper}>
            <Link to={`/person/id/${personData.id}`}>
                <div className={s.imgContainer}>
                    {personData.profile_path ? (
                        <img src={SMALL_POSTER_URL + personData.profile_path} />
                    ) : (
                        <img src={noAva} />
                    )}
                </div>
            </Link>
            <div className={s.text}>
                <Link to={`/person/id/${personData.id}`}>
                    <h3>{personData.name}</h3>
                </Link>
                <h4>Know from:</h4>
                <ul>{knowFor}</ul>
            </div>
        </li>
    );
};

export default SearchPerson;
