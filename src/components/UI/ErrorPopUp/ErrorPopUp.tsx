import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import s from "./ErrorPopUp.module.scss";
import ErrorIcon from "@mui/icons-material/Error";
type ErrorPopUpType = {
    text: string;
    isError?: boolean;
};
const ErrorPopUp: FC<ErrorPopUpType> = ({ text, isError }) => {
    const [popUpStatus, setStatus] = useState<boolean>(false);
    if (popUpStatus) {
        return null;
    }
    return (
        <div className={isError ? s.error : s.basic}>
            <div className={s.header}>
                <span>
                    {" "}
                    <ErrorIcon />
                </span>
                <span>Error</span>
            </div>
            <p>{text}</p>
            <button className={s.btnClose} onClick={() => setStatus(true)}>
                <CloseIcon />
            </button>
        </div>
    );
};

export default ErrorPopUp;
