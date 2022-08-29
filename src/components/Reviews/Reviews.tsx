import { Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination/Pagination";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLazyReviewsQuery } from "../../redux/RTQK/KinoList";
import {
    selectorApiOptions,
    selectApiLanguage,
} from "../../selectors/GlobalOptions";
import { useAppSelector } from "../../static/hooks/hooks";
import ReviewCard from "../cards/ReviewCard/ReviewCard";
import s from "./Reviews.module.scss";
type ReviewsType = {
    reviewsType: "movie" | "tv";
    id: number;
};
const Reviews: FC<ReviewsType> = ({ reviewsType, id }) => {
    const apiParam = useAppSelector(selectorApiOptions);
    const language = useAppSelector(selectApiLanguage);
    const [getReview, { data, isLoading }] = useLazyReviewsQuery();
    const [currentPage, setPage] = useState<number>(1);

    useEffect(() => {
        getReview({
            param: {
                ...apiParam,
                language: language,
                page: currentPage,
            },
            url: `${reviewsType}/${id}`,
        });
    }, [language, reviewsType, id, currentPage]);

    const reviewsList = data?.results.map((el, id) => (
        <ReviewCard data={el} key={id} />
    ));
    const skeletonArr = Array(10)
        .fill(null)
        .map((el, id) => (
            <Skeleton key={id} animation="wave" width={"100%"} height="300px" />
        ));
    const { t } = useTranslation();

    if (!data?.total_results) {
        return null;
    }

    return (
        <div className={s.reviews}>
            <h2 className={s.title}>{t("reviews")}</h2>
            <ul>{isLoading ? skeletonArr : reviewsList}</ul>
            <div className={s.pagination}>
                {data?.total_pages > 1 && (
                    <Pagination
                        count={data.total_pages}
                        page={currentPage}
                        color={"secondary"}
                        onChange={(_, num: number) => setPage(num)}
                    />
                )}
            </div>
        </div>
    );
};

export default Reviews;
