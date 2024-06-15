import React from "react";
import '../styles/ToggleButton_styles.css';

const ToggleButton = () => {

    return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round" />
            </label>
        </div>
    )
}

export default ToggleButton;