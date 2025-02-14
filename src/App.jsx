
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Herosection from './pages/Herosection';
import { useState } from 'react';




const App = () => {

  // form hidden and visible function

  const [isvisible ,setisvisible]=useState(false)


  const togglehandle=()=>{

    setisvisible(!isvisible)
  }
  


// user profile hidden and visible function

  const[user,setuser]=useState(false)

const usertoggle=()=>{
  setuser(!user)
}

  
  return (
    <>
      <Navbar togglehandle={togglehandle} usertoggle={usertoggle} />
      <Routes>
        <Route path="/" element={<Herosection isvisible={isvisible} togglehandle={togglehandle} user={user}  usertoggle={usertoggle}  />} />
      </Routes>
    </>
  );
};

export default App;
