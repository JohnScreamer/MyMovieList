import { FC } from "react";
import s from "./CustomButton.module.scss";
interface CustomButtonType {
    name: string;
    searchFN: (data: any) => void;
}

const CustomButton: FC<CustomButtonType> = ({ name, searchFN }) => {
    return (
        <>
            <button onClick={searchFN} className={s.btn}>
                {name}
            </button>
        </>
    );
};

export default CustomButton;
