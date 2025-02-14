
// import { createRoot } from 'react-dom/client'
// import './stylesheet/style.css'


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Navbar from './component/Navbar'
// import Herosection from './component/Herosection';


 



// createRoot(document.getElementById('root')).render(


// <Router>

// <Navbar    /> 

// <Routes>
  
//   <Route path='/' element={<Herosection    />}/>

  
// </Routes>
// </Router>

// )






import { createRoot } from 'react-dom/client';
import './stylesheet/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
