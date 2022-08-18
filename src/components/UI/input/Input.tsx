import React, { FC, useEffect, useRef } from "react";
import s from "./Input.module.scss";

type InputType = {
    active?: boolean;
    value: string;
    onChange: (data: string) => void;
};
const Input: FC<InputType> = ({ active, value, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    if (active) {
        return (
            <>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={s.input}
                ></input>
            </>
        );
    }
    return (
        <>
            <input className={s.input}></input>
        </>
    );
};

export default Input;
