import React from "react";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import classes from "./style.module.scss";

interface SettingItemProps {
    title?: string;
    children?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = (props) => {
    const { title, children } = props;

    return (
        <View className={classes["setting-item"]} bordered>
            <View className={classes["setting-item-name"]}>
                <Text>{title}</Text>
            </View>
            <View className={classes["setting-item-handle"]}>{children}</View>
        </View>
    );
};

export default SettingItem;
