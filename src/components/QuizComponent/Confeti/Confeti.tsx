import React, { useEffect, useState } from "react";
import { selectWinnerSlide } from "../../../selectors/GlobalOptions";
import { useAppSelector } from "../../../static/hooks/hooks";
import Confetti from "react-confetti";
import { width } from "@mui/system";
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
const Confeti = () => {
    const winner = useAppSelector(selectWinnerSlide);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <Confetti
                width={windowSize.innerWidth}
                height={windowSize.innerHeight}
            />
        </>
    );
};

export default Confeti;
