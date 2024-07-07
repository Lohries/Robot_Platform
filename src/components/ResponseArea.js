import React, { useState } from "react";
import TextArea from "./TextArea";
import "../styles/ResponseArea.css";

const ResponseArea = () => {
  const [text, setText] = useState('');
  const [displayTexts, setDisplayTexts] = useState([]);

  const handleSubmit = () => {
    if (text.trim()) {
      setDisplayTexts((prevTexts) => [...prevTexts, text]);
      setText('');
    }
  };

  return (
    <div className="response-container">
      <div className="responseArea">
        {displayTexts.map((displayText, index) => (
          <div key={index} className="text-item">{displayText}</div>
        ))}
      </div>
      <TextArea text={text} setText={setText} />
      <button className="submit-button unique-button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default ResponseArea;
