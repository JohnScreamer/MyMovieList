import React, { FC } from "react";
import s from "./Rating.module.scss";
type RatingType = {
    rating: number;
    count: number;
};
const Rating: FC<RatingType> = ({ rating, count }) => {
    let color = "white";

    if (rating > 6.5) {
        color = "green";
    }
    if (rating > 5.5 && rating < 6.5) {
        color = "yellow";
    }
    if (rating > 4.5 && rating < 5.5) {
        color = "orange";
    }
    if (rating < 4.5) {
        color = "red";
    }
    const ratingFix = rating.toString().slice(0, 3);
    return (
        <div className={s.rating} style={{ color: color }}>
            <h3>{ratingFix}</h3>
        </div>
    );
};

export default Rating;
