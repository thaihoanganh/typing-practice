import React from "react";

import View from "@components/atoms/View";

import TypingPracticeText from "@components/molecules/TypingPracticeText";
import TypingPracticeHandle from "@components/molecules/TypingPracticeHandle";

import classes from "./style.module.scss";

const TypingPractice = () => {
    return (
        <View className={classes["typing-practice"]} bordered>
            <TypingPracticeText />
            <TypingPracticeHandle />
        </View>
    );
};

export default TypingPractice;
