import React from "react";
import classnames from "classnames";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import classes from "./style.module.scss";

const TypingPracticeText = () => {
    return (
        <View className={classes["typing-practice-text"]}>
            <Text className={classes["text-item"]} color="primary">
                A
            </Text>
            <Text className={classes["text-item"]} color="error">
                C
            </Text>
            <Text
                className={classnames(classes["text-item"], classes["text-item-active"])}
                color="secondary"
            >
                B
            </Text>
            <Text className={classes["text-item"]} color="secondary">
                B
            </Text>
        </View>
    );
};

export default TypingPracticeText;
