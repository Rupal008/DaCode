// import './App.css';
import FirstComp from './Components/FirstComp/FirstComp';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Blog from './Pages/Blog/Blog';
import Services from "./Pages/Sevices/Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     <Router>
     <NavigationBar/>
        <Routes>
          <Route path="/" element={< FirstComp/>} />
          <Route path="/service" element={< Services/>} />
          <Route path="/blog" element={< Blog/>} />
        </Routes>
        
    </Router>
    </>
  );
}

export default App;
