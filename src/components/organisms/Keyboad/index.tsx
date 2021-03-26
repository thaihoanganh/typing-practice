import React from "react";

import View from "@components/atoms/View";

import KeyboadKeycap from "@components/molecules/KeyboadKeycap";

import classes from "./style.module.scss";

const keyboad = () => {
    return (
        <View className={classes["keyboad"]}>
            <KeyboadKeycap code="Backquote">`</KeyboadKeycap>
            <KeyboadKeycap code="Digit1">1</KeyboadKeycap>
            <KeyboadKeycap code="Digit2">2</KeyboadKeycap>
            <KeyboadKeycap code="Digit3">3</KeyboadKeycap>
            <KeyboadKeycap code="Digit4">4</KeyboadKeycap>
            <KeyboadKeycap code="Digit5">5</KeyboadKeycap>
            <KeyboadKeycap code="Digit6">6</KeyboadKeycap>
            <KeyboadKeycap code="Digit7">7</KeyboadKeycap>
            <KeyboadKeycap code="Digit8">8</KeyboadKeycap>
            <KeyboadKeycap code="Digit9">9</KeyboadKeycap>
            <KeyboadKeycap code="Digit0">0</KeyboadKeycap>
            <KeyboadKeycap code="Minus">-</KeyboadKeycap>
            <KeyboadKeycap code="Equal">=</KeyboadKeycap>
            <KeyboadKeycap>back</KeyboadKeycap>

            <KeyboadKeycap code="">tab</KeyboadKeycap>
            <KeyboadKeycap code="KeyQ">Q</KeyboadKeycap>
            <KeyboadKeycap code="KeyW">W</KeyboadKeycap>
            <KeyboadKeycap code="KeyE">E</KeyboadKeycap>
            <KeyboadKeycap code="KeyR">R</KeyboadKeycap>
            <KeyboadKeycap code="KeyT">T</KeyboadKeycap>
            <KeyboadKeycap code="KeyY">Y</KeyboadKeycap>
            <KeyboadKeycap code="KeyU">U</KeyboadKeycap>
            <KeyboadKeycap code="KeyI">I</KeyboadKeycap>
            <KeyboadKeycap code="KeyO">O</KeyboadKeycap>
            <KeyboadKeycap code="KeyP">P</KeyboadKeycap>
            <KeyboadKeycap code="BracketLeft">[</KeyboadKeycap>
            <KeyboadKeycap code="BracketRight">]</KeyboadKeycap>
            <KeyboadKeycap code="Backslash">\</KeyboadKeycap>

            <KeyboadKeycap code="">caps lock</KeyboadKeycap>
            <KeyboadKeycap code="KeyA">A</KeyboadKeycap>
            <KeyboadKeycap code="KeyS">S</KeyboadKeycap>
            <KeyboadKeycap code="KeyD">D</KeyboadKeycap>
            <KeyboadKeycap code="KeyF">F</KeyboadKeycap>
            <KeyboadKeycap code="KeyG">G</KeyboadKeycap>
            <KeyboadKeycap code="KeyH">H</KeyboadKeycap>
            <KeyboadKeycap code="KeyJ">J</KeyboadKeycap>
            <KeyboadKeycap code="KeyK">K</KeyboadKeycap>
            <KeyboadKeycap code="KeyL">L</KeyboadKeycap>
            <KeyboadKeycap code="Semicolon">;</KeyboadKeycap>
            <KeyboadKeycap code="Quote">'</KeyboadKeycap>
            <KeyboadKeycap code="Enter">enter</KeyboadKeycap>

            <KeyboadKeycap code="">shift</KeyboadKeycap>
            <KeyboadKeycap code="KeyZ">Z</KeyboadKeycap>
            <KeyboadKeycap code="KeyX">X</KeyboadKeycap>
            <KeyboadKeycap code="KeyC">C</KeyboadKeycap>
            <KeyboadKeycap code="KeyV">V</KeyboadKeycap>
            <KeyboadKeycap code="KeyB">B</KeyboadKeycap>
            <KeyboadKeycap code="KeyN">N</KeyboadKeycap>
            <KeyboadKeycap code="KeyM">M</KeyboadKeycap>
            <KeyboadKeycap code="Comma">,</KeyboadKeycap>
            <KeyboadKeycap code="Period">.</KeyboadKeycap>
            <KeyboadKeycap code="Slash">/</KeyboadKeycap>
            <KeyboadKeycap code="">shift</KeyboadKeycap>

            <KeyboadKeycap code="">ctrl</KeyboadKeycap>
            <KeyboadKeycap code="">alt</KeyboadKeycap>
            <KeyboadKeycap code="Space"></KeyboadKeycap>
            <KeyboadKeycap code="">alt</KeyboadKeycap>
            <KeyboadKeycap code="">ctrl</KeyboadKeycap>
        </View>
    );
};

export default keyboad;
