import React , { useRef} from 'react';
import Carousel from "react-elastic-carousel";
import "../Css/Slider.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import "../Css/Home.css";
import {cardData16} from './cardData';
import DynamicTitle2 from './DynamicTitle2';
function SleepSlider1() {

  

  const breakPoints = [
  { width: 216, itemsToShow: 1},
  { width: 216, itemsToShow: 2},
  { width: 216, itemsToShow: 3 },
  { width: 216, itemsToShow: 4 },
];

const CarouselRef = useRef(null);



  return (
     <>
<div className='components-card'>

 <div className='Box-title'> <p>Popular Sleep Stories</p></div>
     <div className="custom-button-container">
          <button className="prev-btn1" onClick={() => CarouselRef.current.slidePrev()}>
            <ArrowBackIosIcon id="btn"/>
          </button>
          <button className="next-btn1" onClick={() => CarouselRef.current.slideNext()}>
          <ArrowForwardIosIcon id="btn"/>
          </button>
        </div>
 
      <div className="card-Container">

    

        <Carousel breakPoints={breakPoints}
         disableArrowsOnEnd
  pagination={false}
    ref={CarouselRef}
      >


          
        
         {cardData16.map((card, index) => (

          <div className={`rec-carousel-item small-carousel-item`} key={index}>
          <div className='Card'>
           <div className="Card-img">

            <img src={card.imageSrc} alt=""/>
            
           </div>
           <div className= "Card-text">
             <h6>{card.title}</h6>
             <p>{card.description}</p>
          </div>
        </div>
        </div>

         ))}
        
          
        </Carousel>
      </div>
      </div>
    </>
  )
}

export default SleepSlider1