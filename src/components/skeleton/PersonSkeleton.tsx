import Skeleton from "@mui/material/Skeleton/Skeleton";
import React from "react";

const PersonSkeleton = () => {
    return (
        <>
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: 55 }}
                style={{
                    maxWidth: "220px",
                    background: "var(--color-skeleton)",
                }}
            />

            <Skeleton
                animation="wave"
                variant="rectangular"
                style={{
                    width: "100%",
                    height: "650px",
                    marginBottom: "20px",
                    background: "var(--color-skeleton)",
                }}
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                style={{
                    width: "100%",
                    height: "250px",
                    marginBottom: "20px",
                    background: "var(--color-skeleton)",
                }}
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                style={{
                    width: "100%",
                    height: "250px",
                    background: "var(--color-skeleton)",
                }}
            />
        </>
    );
};

export default PersonSkeleton;
