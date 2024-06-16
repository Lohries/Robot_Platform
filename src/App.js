import './App.css';
import Enterpage from './screen/Enterpage.js';
import ChatPage from './screen/ChatPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screen/Home.js';
import AboutUs from './screen/AboutUs.js';
import Classifier from './screen/Classifier.js';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Enterpage />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/classifier" element={<Classifier />} />
          <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
