import React , { useRef} from 'react';
import Carousel from "react-elastic-carousel";
import "../Css/Slider.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../Css/Home.css";
import {cardData6} from './cardData';

function CardConta6({playAudio}) {

const breakPoints = [
  { width: 216, itemsToShow: 3},
  { width: 216, itemsToShow: 2},
  { width: 216, itemsToShow: 3 },
  { width: 216, itemsToShow: 4 },
];

const CarouselRef = useRef(null);

const handleButtonClick = (audioSrc,imageSrc,title,description) => {
    // Call the parent function and pass the audio source
    playAudio(audioSrc,imageSrc,title,description);
    

  };

  return (
     <>
<div className='components-card'>

 <div className='Box-title'> <p>Movement</p></div>
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


          
        
         {cardData6.map((card, index) => (
          <div className='Card' onClick={() => handleButtonClick(card.audioSrc ,card.imageSrc,card.title,card.description)}>
           <div className="Card-img">

            <img src={card.imageSrc} alt=""/>
            
           </div>
           <div className= "Card-text">
             <h6>{card.title}</h6>
             <p>{card.description}</p>
          </div>
        </div>

         ))}
        
          
        </Carousel>
      </div>
      </div>
    </>
  )
}




export default CardConta6