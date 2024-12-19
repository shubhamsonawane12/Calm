import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prevShow) => !prevShow);
  };



  return (
    <>
     <div className="Mobile-Sidebar">
      <Navbar className="nav-backcolor"  expand="lg" fixed="top">

        <Container fluid>
                 <Navbar.Brand href="#" className="brand-Name3">C<span>alm</span></Navbar.Brand>
         
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar"
            onClick={handleToggleOffcanvas}
          />
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="end"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Offcanvas.Header  className="close-btn"closeButton>
              <Offcanvas.Title className="brand-Name1" id="offcanvasNavbarLabel">Calm</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              
             
             
             
      
     <a href="#" className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle">
        <HomeIcon />
        
      </div>
       Home
      
      </div> 

    </a>
    
    <a href="#" className="nav-link active">
    
     <div className="Resp-sidebar">
      <div className="Responsive-circle">
        <SelfImprovementIcon />
      </div>
      Meditate
      </div>
       
    </a>
        <a href="#" className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle">
      <BedtimeIcon/>
      </div>
     Sleep
     </div>
    </a>
        <a href="#" className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle">
       <MusicNoteIcon/> 
      </div>
     Music
     </div> 
    </a>
        <a href="#" className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle">
        <LocalCafeIcon/> 
      </div>
      For Work
      </div>
    </a>
        <a  href="#" className="nav-link active">
         <div className="Resp-sidebar">
      <div className="Responsive-circle">
       <EmojiObjectsIcon/>
      </div>
      Wisdom
       </div>
    </a>
        <a  href="#"  className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle ">
       <ChildCareIcon/> 
      </div>
      Calm Kids
      </div>
    </a>
        <a  href="#" className="nav-link active">
         <div className="Resp-sidebar">
      <div className="Responsive-circle">
        <DirectionsRunIcon/> 
      </div>
      Movement
      </div>
    </a>
        <a  href="#" className="nav-link active">
        <div className="Resp-sidebar">
      <div className="Responsive-circle">
       <AccountCircleIcon/>
      </div>
       Profile
       </div>
    </a>
            
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      
      </div>
       
      

<div className="SidebarWrapper">
   <h1  className="brand-Name">C<span>alm</span></h1>
  <div className="Sidebar">

    <Link to="/" className="nav-link" id="hover-color" >
      <div className="circle">
        <HomeIcon />
      </div>
      Home
    </Link>
   
   
    <Link to="/Meditate" className="nav-link" id="hover-color">
      <div className="circle">
        <SelfImprovementIcon />
      </div>
      Meditate
    </Link>
        <Link to="/Sleep" className="nav-link" id="hover-color">
      <div className="circle">
      <BedtimeIcon/>
      </div>
     Sleep
    </Link>
        <Link to="/Music" className="nav-link" id="hover-color">
      <div className="circle">
       <MusicNoteIcon/> 
      </div>
     Music 
    </Link>
        <Link to="/ForWork" className="nav-link" id="hover-color">
      <div className="circle">
        <LocalCafeIcon/> 
      </div>
      For Work
    </Link>
        <Link to="/Wisdom" className="nav-link" id="hover-color">
      <div className="circle">
       <EmojiObjectsIcon/>
      </div>
      Wisdom
    </Link>
        <Link to="/CalmKids"  className="nav-link" id="hover-color">
      <div className="circle">
       <ChildCareIcon/> 
      </div>
      Calm Kids
    </Link>
        <Link to="/Movement" className="nav-link" id="hover-color">
      <div className="circle">
        <DirectionsRunIcon/> 
      </div>
      Movement
    </Link>
        <Link to="/Profile" className="nav-link" id="hover-color">
      <div className="circle">
       <AccountCircleIcon/>
      </div>
       Profile
    </Link>
      
  </div>
</div>

    
    </>
  );
};

export default Sidebar;
