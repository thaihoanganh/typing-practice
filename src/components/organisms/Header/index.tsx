import React from "react";

import View from "@components/atoms/View";

import HeaderLogo from "@components/molecules/HeaderLogo";
import HeaderMenu from "@components/molecules/HeaderMenu";

import classes from "./style.module.scss";

const Header = () => {
    return (
        <View className={classes["header"]}>
            <HeaderLogo />
            <HeaderMenu />
        </View>
    );
};

export default Header;
