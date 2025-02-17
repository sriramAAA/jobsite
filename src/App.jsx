
// import React from 'react';
// import Navbar from './component/Navbar';
// import Herosection from './pages/Herosection';
// import Addjobpost from './pages/Addjobpost';



// const App = () => {







//   return (
//     <>
//    < Navbar/>
// <Herosection />
// <Addjobpost />
//     </>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Herosection from "./pages/Herosection";
import Addjobpost from "./pages/Addjobpost";

// import './stylesheet/style.css'
import './stylesheet/style.css';



const App = () => {
  return (


<>


      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/addjobpost" element={<Addjobpost />} />
      </Routes>


</>




   





  );
};

export default App;
