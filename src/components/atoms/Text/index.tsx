import React from "react";
import classnames from "classnames";

import classes from "./style.module.scss";

export interface TextProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: "primary" | "secondary" | "success" | "warning" | "error";
    size?: "small" | "middle" | "large";
}

const Text: React.FC<TextProps> = (props) => {
    const { className, children, color = "primary", size = "middle", ...textPorps } = props;
    return (
        <span
            className={classnames(
                color && classes[`text-${color}`],
                size !== "middle" && classes[`text-${size}`],
                className
            )}
            {...textPorps}
        >
            {children}
        </span>
    );
};

export default Text;
