import React, { FC } from "react";
import s from "./PopUpPortalWrapper.module.scss";
import CloseIcon from "@mui/icons-material/Close";
type PopUpPortalWrapperType = {
    children: React.ReactNode;
    closeWindowFunc: (status: boolean) => void;
};
const PopUpPortalWrapper: FC<PopUpPortalWrapperType> = ({
    children,
    closeWindowFunc,
}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {children}
                <button
                    className={s.btnClose}
                    onClick={() => closeWindowFunc(false)}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default PopUpPortalWrapper;
