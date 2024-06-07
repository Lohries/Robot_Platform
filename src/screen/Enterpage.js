import React from "react";
import Button_Enter from "../components/Button_Enter";
import '../styles/Enter_page_styles.css'
import {Outlet} from 'react-router-dom';
import Footer from "../components/Footer";


const Enterpage = () => {
    return(
        <div>
            <Button_Enter />
            
            <Footer />
        </div>
        
    )
    
}

export default Enterpage;
