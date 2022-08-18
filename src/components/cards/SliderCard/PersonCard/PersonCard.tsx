import { FC } from "react";
import { SMALL_POSTER_URL } from "../../../../static/constants/URL";
import { PersonTrendingType } from "../../../../Types/ApiPersonType";
import s from "./PersonCard.module.scss";
import { CardWrapper } from "../../../../styledComponents/CardWrapper";
type PersonCardType = {
    person: PersonTrendingType;
};
const PersonCard: FC<PersonCardType> = ({ person }) => {
    const bg = SMALL_POSTER_URL + person.profile_path;

    return (
        <CardWrapper className={s.cardWrapper} bg={bg}>
            <h3>{person.name}</h3>
        </CardWrapper>
    );
};

export default PersonCard;
