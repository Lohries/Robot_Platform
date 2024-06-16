import React from "react";
import ButtonEnter from "../components/Button_Enter";
import '../styles/Enter_page_styles.css'
import {Outlet} from 'react-router-dom';
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButton";


const Enterpage = () => {
    return(
        <div>
            <ToggleButton/>
            <ButtonEnter />
            
            <Footer />
        </div>
        
    )
    
}

export default Enterpage;
