import React from "react";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";
import Switch from "@components/atoms/Switch";

import SettingItem from "@components/molecules/SettingItem";

import classes from "./style.module.scss";

const SettingPanel = () => {
    return (
        <View className={classes["setting-panel"]} bordered>
            <View className={classes["setting-panel-header"]} bordered>
                <Text className={classes["setting-panel-header-title"]}>Cài đặt</Text>
            </View>
            <View className={classes["setting-panel-body"]}>
                <SettingItem title="Chế độ tối">
                    <Switch />
                </SettingItem>
                <SettingItem title="Tắt tiếng">
                    <Switch />
                </SettingItem>
            </View>
        </View>
    );
};

export default SettingPanel;
