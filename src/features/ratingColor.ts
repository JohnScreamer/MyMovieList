export const ratingColor = (rating: number | undefined) => {
    let color = "white";

    if (rating) {
        if (rating > 6.5) {
            color = "#70fc46";
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
        return color;
    }
    return "";
};
