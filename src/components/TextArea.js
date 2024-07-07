import React, { useState } from "react";
import '../styles/TextArea_styles.css';

const TextArea = ({ text, setText}) => {
    const handleChange = (e) => {
        setText(e.target.value) //
    }
    
    return (
        <div className="text-area">
            <textarea  
            id="myTextArea" 
            rows={1} 
            cols={50} 
            placeholder="Digite algo"
            value={text}
            onChange={handleChange}>
            </textarea>
        </div>
    )
}

export default TextArea;