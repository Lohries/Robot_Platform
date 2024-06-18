import React, { useState } from "react";
import '../styles/TextArea_styles.css';

const TextArea = () => {
    return (
        <div className="text-area">
            <textarea id="myTextArea" rows={1} cols={50} placeholder="Digite algo"></textarea>
        </div>
    )
}

export default TextArea;