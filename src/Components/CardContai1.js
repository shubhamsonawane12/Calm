import React, { useRef, useState } from 'react';
import Carousel from "react-elastic-carousel";
import "../Css/Slider.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { cardData1 } from './cardData';
import DynamicTitle2 from './DynamicTitle2';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'; // Import audio player styles


function CustomSlider({ playAudio }) {


  const CarouselRef = useRef(null);

  const breakPoints = [
    { width: 216, itemsToShow: 1 },
    { width: 216, itemsToShow: 2 },
    { width: 216, itemsToShow: 3 },
    { width: 216, itemsToShow: 4 },
  ];

 const handleButtonClick = (audioSrc,imageSrc,title,description) => {
    // Call the parent function and pass the audio source
    playAudio(audioSrc,imageSrc,title,description);
    

  };
  
  return (
    <>
      <div className='components-card'>
        <div className='Box-title'><p><DynamicTitle2 /></p></div>
        <div className="custom-button-container">
          <button className="prev-btn1" onClick={() => CarouselRef.current.slidePrev()}>
            <ArrowBackIosIcon id="btn" />
          </button>
          <button className="next-btn1" onClick={() => CarouselRef.current.slideNext()}>
            <ArrowForwardIosIcon id="btn" />
          </button>
        </div>

        <div className="card-Container">
          <Carousel
            breakPoints={breakPoints}
            disableArrowsOnEnd
            pagination={false}
            ref={CarouselRef}
          >
            {cardData1.map((card, index) => (
              <div className={`rec-carousel-item small-carousel-item`} key={index}>
                <div className='Card' onClick={() => handleButtonClick(card.audioSrc ,card.imageSrc,card.title,card.description)}>
                  <div className="Card-img">
                    <img src={card.imageSrc} alt="" />
                  </div>
                  <div className="Card-text">
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
  );
}

export default CustomSlider;