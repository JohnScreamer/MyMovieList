import React, { FC } from "react";
import { SMALL_POSTER_URL } from "../../../static/constants/URL";
import { MovieReview } from "../../../Types/Reviews";
import s from "./ReviewCard.module.scss";
import noImg from "./../../../static/img/noavatar1.png";
import { ratingColor } from "../../../features/ratingColor";
import { ParsTime } from "../../../features/ParsTime";
import { getValidPostTime, isRelease } from "../../../features/isRelease";
import { validPostDate } from "../../../features/ratingFilter";
type ReviewCardType = {
    data: MovieReview;
};

const ReviewCard: FC<ReviewCardType> = ({ data }) => {
    let avatar = data?.author_details.avatar_path
        ? SMALL_POSTER_URL + data.author_details.avatar_path
        : noImg;
    if (data?.author_details.avatar_path?.startsWith("/https")) {
        avatar = data.author_details.avatar_path.slice(1);
    }
    return (
        <li className={s.cardWrapper}>
            <div className={s.header}>
                <div className={s.imgWrapper}>
                    <img src={avatar} />
                </div>
                <div className={s.userInfo}>
                    <div>{data.author}</div>
                    <span>
                        {getValidPostTime(ParsTime(String(data.created_at)))}
                    </span>
                </div>
                <div
                    className={s.rating}
                    style={{
                        background: ratingColor(data.author_details.rating),
                    }}
                >
                    {data.author_details.rating}
                </div>
            </div>

            <p>{data.content}</p>
        </li>
    );
};

export default ReviewCard;
