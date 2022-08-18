import React, { FC } from "react";
import { MainWrapper } from "../../styledComponents/MainWrapper";
type WrapperType = {
    bg: string;
    children: React.ReactNode;
};
const Wrapper: FC<WrapperType> = ({ bg, children }) => {
    return <MainWrapper bg={bg}>{children}</MainWrapper>;
};

export default Wrapper;
