import React, { FC } from "react";
import ReactDOM from "react-dom";
type PortalType = {
    component: React.ReactNode;
};
const container = document.getElementById("portal")!;
const Portal = ({ component }: PortalType) => {
    return ReactDOM.createPortal(component, container);
};

export default Portal;
