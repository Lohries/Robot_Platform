import React from "react";
import ButtonEnter from "../components/Button_Enter";
import '../styles/Enter_page_styles.css'
import {Outlet} from 'react-router-dom';
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButton";
import AbouUs_Button from "../components/AboutUs_Button";

const Enterpage = () => {
    return(
        <div>
           
            <ButtonEnter />
            <AbouUs_Button/>
            <Footer />
        </div>
        
    )
    
}

export default Enterpage;
