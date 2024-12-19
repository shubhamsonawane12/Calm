import React ,{ useRef } from 'react';
import "../Css/Home.css";
import {cardData23} from './cardData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import MusicSlider  from  "./MusicSlider";
import MusicSlider1 from './MusicSlider1';
import MusicSlider2 from './MusicSlider2';
import MusicSlider3 from './Musicslider3'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function Wisdom() {



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
  

  return (
    <div className="Home">
      <div className="Home-content">
        <div className="top">
          <h1>Wisdom</h1>
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
                items={cardData23.map((card, index) => (
                  <div className='mid-Card' key={index}>
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

        <MusicSlider1/>
        <MusicSlider2/>
         <MusicSlider3/>
         
      </div>
    </div>
  );
}

export default Wisdom;
