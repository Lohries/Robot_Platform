import React from "react";
import Footer from "../components/Footer";
import InsertImageButton from "../components/InsertImage_Button";
import ActivateInmoovEyes from "../components/ActivateEyes";


const Classifier= () => {
    return(
        <div className="spacer">
            <InsertImageButton/>
            <ActivateInmoovEyes/>
            <Footer/>
        </div>
    )
    
}
export default Classifier