import classNames from "classnames";
import { FC, memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setPortalStatus } from "../../redux/slice/GlobalOptionsSlice";

import {
    selectBurgerStatus,
    selectPortalStatus,
    selectZoomImg,
} from "../../selectors/GlobalOptions";
import { useAppDispatch, useAppSelector } from "../../static/hooks/hooks";
import Content from "../Content/Content";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import Portal from "../portal/Portal";
import PortalWindow from "../UI/PortalWindow/PortalWindow";
import ZoomImgWrapper from "../UI/ZoomImgWrapper/ZoomImgWrapper";
type ContainerType = {
    children: React.ReactNode;
};
export const Container: FC<ContainerType> = ({ children }) => {
    const navStatus = useAppSelector(selectBurgerStatus);
    const img = useAppSelector(selectZoomImg);

    const portalStatus = useAppSelector(selectPortalStatus);
    const dispatch = useAppDispatch();
    const handlerPortalStatus = (status: boolean) => {
        dispatch(setPortalStatus(status));
    };

    return (
        <>
            <NavBar />
            <NavBarMobile />
            {portalStatus && (
                <Portal
                    component={
                        <PortalWindow
                            closeWindowFunc={handlerPortalStatus}
                            content={<ZoomImgWrapper img={img} />}
                        />
                    }
                />
            )}
            <div
                className={classNames("content", {
                    close: navStatus === "close",
                    open: navStatus === "open",
                })}
            >
                {children}
            </div>
        </>
    );
};
