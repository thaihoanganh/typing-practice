import React from "react";

import View from "@components/atoms/View";

import classes from "./style.module.scss";

const TypingPracticeHandle = () => {
    return (
        <View className={classes["typing-practice-handle"]}>
            <input type="text" />
        </View>
    );
};

export default TypingPracticeHandle;
