import React from "react";
import classes from "./style.module.scss";

export interface SwitchProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

const Switch: React.FC<SwitchProps> = (props) => {
    return (
        <label className={classes["switch"]}>
            <input type="checkbox" className={classes["switch-input"]} {...props} />
            <div className={classes["switch-handle"]} />
        </label>
    );
};

export default Switch;
