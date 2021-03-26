import React from "react";

import View from "@components/atoms/View";
import Header from "@components/organisms/Header";

import classes from "./style.module.scss";

interface LayoutProps {
    children?: React.ReactNode;
}

interface layoutInterface extends React.FC<LayoutProps> {}

const layout: layoutInterface = (props) => {
    return (
        <View className={classes["layout"]}>
            <View className={classes["layout-header"]} bordered>
                <Header />
            </View>
            <View className={classes["layout-content"]}>{props.children}</View>
        </View>
    );
};

export default layout;
