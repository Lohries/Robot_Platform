import React from "react";
import Footer from "../components/Footer";
import ChatButton from "../components/Chat_Button";
import ClassificationButton from "../components/Classification_Button";
import DetectionsButton from "../components/Detections_Button";
import '../styles/Home_page_styles.css'
import ToggleButton from "../components/ToggleButton";
const Home = () => {

    return (
        <div class="spacer">
            
            <ChatButton/>
            <ClassificationButton/>
            <DetectionsButton/>
            <Footer/>
        </div>
    )

}
export default Home;