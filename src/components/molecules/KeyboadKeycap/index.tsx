import React from "react";
import classnames from "classnames";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import classes from "./style.module.scss";

interface KeyboadKeycap {
    children?: React.ReactNode;
    code?: string;
}

const KeyboadKeycap: React.FC<KeyboadKeycap> = (props) => {
    const { children, code } = props;

    return (
        <View className={classnames(classes["keycap"])} data-key-code={code || children}>
            <Text>{children}</Text>
        </View>
    );
};

export default KeyboadKeycap;
