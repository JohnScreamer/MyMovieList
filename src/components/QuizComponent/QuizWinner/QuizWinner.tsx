import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { selectWinnerSlide } from "../../../selectors/GlobalOptions";
import { MEDIUM_BACKGROUND_URL } from "../../../static/constants/URL";
import { useAppSelector } from "../../../static/hooks/hooks";
import { Img } from "../../UI/Img/ImgWrapper";
import PortalWindow from "../../UI/PortalWindow/PortalWindow";
import NO_PICTURE from "./../../../static/img/noPOSTERFILM.jpg";
import s from "./QuizWinner.module.scss";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LazyLoadImg from "../../UI/LazyLoadImg/LazyLoadImg";
const QuizWinner = () => {
    const winner = useAppSelector(selectWinnerSlide);
    const navigate = useNavigate();
    if (!winner) {
        return null;
    }
    const poster = winner.backdrop_path
        ? MEDIUM_BACKGROUND_URL + winner.backdrop_path
        : NO_PICTURE;

    return (
        <div className={s.container}>
            <div className={s.winnerWrapper}>
                <div className={s.ingWrapper}>
                    {" "}
                    <LazyLoadImg src={poster} />
                </div>
                <div className={s.info}>
                    <EmojiEventsIcon width={150} height={150} />
                    <h1>Winner</h1>
                    <h3>{winner.name ? winner.name : winner.title}</h3>
                    <Link to={"/"}>Home </Link>
                    <Link to={"/quiz"}>Quiz page</Link>
                </div>
            </div>
        </div>
    );
};

export default QuizWinner;
