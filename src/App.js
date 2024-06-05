import './App.css';
import Enterpage from './screen/Enterpage.js';
import ChatPage from './screen/ChatPage.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      
        <Route path='/'>
          <Enterpage/>
        </Route>
      
        
        <Footer/>
      </div>
      <Routes>
        <Route exact path='/' element={<Enterpage/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/' element={<ChatPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
