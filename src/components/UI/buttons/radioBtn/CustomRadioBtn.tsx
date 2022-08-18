import { FC } from "react";
import { MediaTypes } from "../../../../Types/common";
import s from "./CustomRadioBtn.module.scss";
interface CustomRadioBtnType {
    value: MediaTypes;
    currentValue: string;
    onChange: (data: MediaTypes) => void;
    name: string;
}
const CustomRadioBtn: FC<CustomRadioBtnType> = ({
    value,
    onChange,
    currentValue,
    name,
}) => {
    return (
        <>
            <label htmlFor={value} className={s.btnWrapper}>
                <input
                    id={value}
                    type={"radio"}
                    checked={value === currentValue}
                    onChange={() => onChange(value)}
                />
                <h3>{name}</h3>
            </label>
        </>
    );
};

export default CustomRadioBtn;
