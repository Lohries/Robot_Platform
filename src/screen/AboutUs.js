import React from "react";
import Footer from "../components/Footer";
import "../styles/AboutUs_styles.css"

const AboutUs = () => {
    return (
        <div>
            
            <div class="aboutus-content">
                <h1>InMoov Web Application Project</h1>
                <p>
                    InMoov is an open-source project involving the construction of a life-sized, 3D-printed humanoid robot. 
                    Created by Gael Langevin, it is designed to be accessible and customizable, allowing hobbyists and researchers 
                    to experiment with robotics and artificial intelligence.
                </p>

                <h2>Creating a Web Application for InMoov</h2>
                <p>
                    Developing a web application for controlling or interacting with an InMoov robot can significantly enhance 
                    its functionality and usability. Here’s a high-level explanation of how you might approach this project:
                </p>

                <h2>Objectives and Features</h2>
                <p>Define the objectives and features of the web application. Some potential features might include:</p>
                <ul>
                    <li>Remote control of the robot’s movements (head, arms, hands, etc.)</li>
                    <li>Real-time video feed from the robot’s cameras</li>
                    <li>Voice control and text-to-speech capabilities</li>
                    <li>Sensor data monitoring (e.g., temperature, distance sensors)</li>
                    <li>Programming interface for creating and running scripts</li>
                    <li>User authentication and role management</li>
                </ul>

                <h2>Architecture Overview</h2>
                <p>The architecture of the web application can be divided into three main components:</p>
                <ol>
                    <li>
                        <strong>Frontend (Client-Side)</strong>: The user interface of the application, typically built using web 
                        technologies like HTML, CSS, and JavaScript (with frameworks such as React, Vue.js, or Angular).
                    </li>
                    <li>
                        <strong>Backend (Server-Side)</strong>: The server that handles requests from the frontend, processes data, 
                        and communicates with the robot. This can be built using a framework like Node.js, Django, or Flask.
                    </li>
                    <li>
                        <strong>Robot Interface</strong>: The software that runs on the robot, which receives commands from the 
                        backend and controls the robot's hardware. This might involve using ROS (Robot Operating System) or custom scripts.
                    </li>
                </ol>

                <h2>Frontend Development</h2>
                <ul>
                    <li>
                        <strong>UI Design</strong>: Create a user-friendly interface that allows users to interact with the robot easily. 
                        Use responsive design to ensure it works well on various devices.
                    </li>
                    <li>
                        <strong>Control Dashboard</strong>: Develop a dashboard for controlling the robot's movements, viewing video feeds, 
                        and monitoring sensor data.
                    </li>
                    <li>
                        <strong>Communication</strong>: Implement WebSockets or HTTP for real-time communication between the frontend and backend.
                    </li>
                </ul>

                <h2>Backend Development</h2>
                <ul>
                    <li>
                        <strong>API Development</strong>: Develop RESTful APIs or GraphQL endpoints for the frontend to interact with the backend.
                    </li>
                    <li>
                        <strong>Authentication</strong>: Implement user authentication and authorization to secure access to the application.
                    </li>
                    <li>
                        <strong>Data Processing</strong>: Handle and process data received from the robot’s sensors and cameras.
                    </li>
                    <li>
                        <strong>Command Handling</strong>: Forward commands from the frontend to the robot interface.
                    </li>
                </ul>

                <h2>Robot Interface Development</h2>
                <ul>
                    <li>
                        <strong>ROS Integration</strong>: If using ROS, set up ROS nodes to handle different parts of the robot (e.g., movement, vision, speech).
                    </li>
                    <li>
                        <strong>Command Execution</strong>: Write scripts or use existing libraries to control the robot’s hardware based on commands received from the backend.
                    </li>
                    <li>
                        <strong>Feedback Mechanism</strong>: Ensure the robot can send data back to the backend, such as sensor readings or status updates.
                    </li>
                </ul>

                <h2>Testing and Deployment</h2>
                <ul>
                    <li>
                        <strong>Testing</strong>: Thoroughly test the application to ensure all components work together seamlessly. This includes unit testing, integration testing, and user acceptance testing.
                    </li>
                    <li>
                        <strong>Deployment</strong>: Deploy the backend on a server (e.g., AWS, Heroku) and host the frontend on a web server. Ensure the robot is properly connected to the network.
                    </li>
                </ul>

                <h2>Continuous Improvement</h2>
                <ul>
                    <li><strong>User Feedback</strong>: Gather feedback from users to identify areas for improvement.</li>
                    <li><strong>Updates</strong>: Regularly update the application with new features, bug fixes, and performance enhancements.</li>
                </ul>

                <h2>Example Workflow</h2>
                <ol>
                    <li><strong>User Logs In</strong>: The user accesses the web application and logs in.</li>
                    <li><strong>Access Control Dashboard</strong>: The user navigates to the control dashboard.</li>
                    <li><strong>Send Command</strong>: The user sends a command to move the robot’s arm via the interface.</li>
                    <li><strong>Backend Processes Command</strong>: The backend receives the command and forwards it to the robot interface.</li>
                    <li><strong>Robot Executes Command</strong>: The robot interface executes the command, moving the arm.</li>
                    <li><strong>Feedback</strong>: The robot sends feedback (e.g., arm position) back to the backend, which updates the frontend.</li>
                </ol>

             
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;
