import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import  "./Css/main.css";
import Home from "./Components/Home";
import Meditate from './Components/Meditate';
import Sleep from "./Components/Sleep";
import Music from "./Components/Music";
import ForWork from './Components/ForWork';
import Wisdom from './Components/Wisdom';
import CalmKids from './Components/CalmKids';
import Movement from './Components/Movement';
import Profile from './Components/Profile';
import OceanVideo from '../src/Music/bgTransition1].mp4';
import Login from "../src/Components/Login";
function Main() {
  return (
    <>
   <div className="background-Transition">
     <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
        }}
      >
        <source src={OceanVideo} type="video/mp4" />
      </video>
    <BrowserRouter>
  <Routes>
  <Route path="/Login" element={<Login/>} />
  

  
        
         
           
   
        
  </Routes>
    <Sidebar /> 
   

       <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/Meditate" element={<Meditate/>} />
         <Route path="/Sleep" element={<Sleep/>} />
            <Route path="/Music" element={<Music/>} />
            <Route path="/ForWork" element={<ForWork/>} />
            <Route path="/Wisdom" element={<Wisdom/>} />
            <Route path="/CalmKids" element={<CalmKids/>} />
            <Route path="/Movement" element={<Movement/>} />
            <Route path="/Profile" element={<Profile/>} />
            
        </Routes>

</BrowserRouter>
</div>
  </>
    
  )
}

export default Main