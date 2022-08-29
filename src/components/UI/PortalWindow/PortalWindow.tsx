import React, { FC, useRef } from "react";
import s from "./PortalWindow.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useOnClickOutside } from "../../../static/hooks/ClickOutside";
type PortalWindowType = {
    content: React.ReactNode;
    closeWindowFunc: (data: boolean) => void;
};
const PortalWindow: FC<PortalWindowType> = ({ content, closeWindowFunc }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const clickOutside = useOnClickOutside(containerRef, closeWindowFunc);
    return (
        <div className={s.wrapper}>
            <div className={s.container} ref={containerRef}>
                {" "}
                <button
                    className={s.btnClose}
                    onClick={() => closeWindowFunc(false)}
                >
                    <CloseIcon />
                </button>
                {content}
            </div>
        </div>
    );
};

export default PortalWindow;
