import { FC } from "react";
import s from "./PreviewBlock.module.scss";
type PreviewBlockType = {
    title: string;
    text: string;
    bg: string;
};
const PreviewBlock: FC<PreviewBlockType> = ({ text, title, bg }) => {
    return (
        <div style={{ background: `url(${bg})` }} className={s.previewWrapper}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default PreviewBlock;
