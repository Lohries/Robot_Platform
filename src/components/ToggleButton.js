import React, { useState } from "react";
import '../styles/ToggleButton_styles.css';

const ToggleButton = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSwitch = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={`toggle-switch ${isDarkMode ? 'dark-mode' : ''}`}>
            <label className="switch">
                <input type="checkbox" onChange={ToggleButton} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleButton;