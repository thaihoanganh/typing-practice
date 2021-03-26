import React from "react";
import { NavLink } from "react-router-dom";

import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import classes from "./style.module.scss";

const HeaderMenu = () => {
    return (
        <View className={classes["header-menu"]}>
            <ul className={classes["nav"]}>
                <li className={classes["nav-item"]}>
                    <NavLink to="/" className={classes["nav-item-link"]}>
                        <Text>Trang chủ</Text>
                    </NavLink>
                </li>
                <li className={classes["nav-item"]}>
                    <NavLink to="/cai-dat" className={classes["nav-item-link"]}>
                        <Text>Cài đặt</Text>
                    </NavLink>
                </li>
            </ul>
        </View>
    );
};

export default HeaderMenu;
