import React from "react";
import classnames from "classnames";

import classes from "./style.module.scss";

export interface ViewProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bordered?: boolean;
}

const View: React.FC<ViewProps> = (props) => {
    const { className, children, bordered, ...viewPorps } = props;
    return (
        <div className={classnames(bordered && classes["view-bordered"], className)} {...viewPorps}>
            {children}
        </div>
    );
};

export default View;
