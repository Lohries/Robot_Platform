import React from "react";
import Footer from "../components/Footer";
import InsertImageButton from "../components/InsertImage_Button";
import ActivateInmoovEyes from "../components/ActivateEyes";
import ToggleButton from "../components/ToggleButton";


const Classifier= () => {
    return(
        <div className="spacer">
            <ToggleButton/>
            <InsertImageButton/>
            <ActivateInmoovEyes/>
            <Footer/>
        </div>
    )
    
}
export default Classifier