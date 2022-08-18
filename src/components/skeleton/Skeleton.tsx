import { Skeleton } from "@mui/material";
import React from "react";
const SkeletonTrendingPerson = () => {
    return (
        <Skeleton
            animation="wave"
            variant="rectangular"
            style={{
                width: "100%",
                height: "100%",
                background: "var(--color-skeleton)",
            }}
        />
    );
};

export default SkeletonTrendingPerson;
