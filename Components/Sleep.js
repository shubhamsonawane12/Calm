import React ,{ useRef,useState } from 'react';
import "../Css/Home.css";
import { cardData15 } from './cardData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SleepSlider1 from './SleepSlider1';

import DynamicTitle from "./DynamicTitle";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SleepSlider2 from './SleepSlider2';
import SleepSlider3 from './SleepSlider3';
import SleepSlider4 from './SleepSlider4';
import SleepSlider5 from './SleepSlider5';
import SleepSlider6 from './SleepSlider6';
import AudioPlayer from 'react-h5-audio-player';
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function Sleep({ disableShuffle }) {


const [currentAudioSrc, setCurrentAudioSrc] = useState(null); 
const [currentimageSrc, setCurrentImageSrc] = useState(null); 
const [currenttitle, setCurrenttitle] = useState(null); 
const [currentdescription, setCurrentdiscription] = useState(null); 
    const carouselRef = useRef();


const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const renderPrevButton = () => (
    <button className="prev-btn" onClick={handlePrevClick}>
      <ArrowBackIosIcon id="btn" />
    </button>
  );

  const renderNextButton = () => (
    <button className="next-btn" onClick={handleNextClick}>
      <ArrowForwardIosIcon id="btn" />
    </button>
  );
  const playAudio = (audioSrc ,imageSrc,title,description) => {
    setCurrentAudioSrc(audioSrc); 
    setCurrentImageSrc(imageSrc);
    setCurrenttitle(title);
    setCurrentdiscription(description);



    // Set the current audio source when a card is clicked
  };
  
  

  return (
    <div className="Home">
      <div className="Home-content">
        <div className="top">
          <h1>Sleep</h1>
          {/* <button className="top-btn">Log in</button> */}
        </div>

        <div className="Middle">

        <div className="mid-btn">
 

        </div>
          <div className='Mid-title'> <p>Featured</p></div>
          <div className="mid-Container">
            <div className="item" data-value="1">
              <AliceCarousel
                mouseTracking
                items={cardData15.map((card, index) => (
                  <div className='mid-Card' key={index}  onClick={() => playAudio(card.audioSrc,card.imageSrc,card.title,card.description)} >
                    <div className="mid-Card-img">
                      <img src={card.imageSrc} alt="" />
                    </div>
                    <div className="mid-Card-text">
                      <h6>{card.title}</h6>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
                responsive={responsive}
                controlsStrategy="alternate"
                      renderPrevButton={renderPrevButton} 
          renderNextButton={renderNextButton}
            disableDotsControls={true} 
              />
            </div>
          </div>
        </div>

        <SleepSlider1 playAudio={playAudio}/>
         <SleepSlider2 playAudio={playAudio}/>
        <SleepSlider3 playAudio={playAudio}/>
        <SleepSlider4 playAudio={playAudio}/>
       <SleepSlider5 playAudio={playAudio}/>
        <SleepSlider6 playAudio={playAudio}/>
        {currentAudioSrc  && (
           <div className="audio-Player">
          <div className="audio-player-container" id="audioController">
         
           <div className='MusicCard'>
          <img src={currentimageSrc} alt=""/>
        <div className='M-C-title'>
          <p id="title">{currenttitle}</p>
          <p>{currentdescription}</p>
          </div>
         </div>
            <AudioPlayer  style={{ height: '100px',width:"480px" ,border: 'none', outline: 'none',boxShadow: 'none', color:"white" }}
              customAdditionalControls={[]}
              autoPlay
              src={currentAudioSrc}
              onPlay={e => console.log("onPlay")}
              
              // Other props and controls here
            />
          </div>
           </div>
        )}

      </div>
    </div>
  );
}

export default Sleep;
