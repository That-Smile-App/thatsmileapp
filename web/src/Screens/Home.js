import { useState } from 'react';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import Carousel from 'react-bootstrap/Carousel';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Images
import landingImage from "../Images/landingImage.png"
import appStore from "../Images/AppStore.png"
import playStore from "../Images/playStore.png"
import centeredImage from "../Images/centeredImage.png"

// Constants
import { carouselData } from '../Constants/constants';

// Styles
import '../App.css';
import 'react-awesome-slider/dist/styles.css';



function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);


  const backgroundStyle = {
    backgroundImage: `url(${centeredImage})`
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <Header />
      <div className="gradient-background">
        <div className="container-box main-header">
          <div class="row main-img">
            <div class="col-md-6">
              <div class="d-flex row justify-content-center pt-5">
                <img src={landingImage} alt="My Image" className="mbl-img" />
              </div>
            </div>
            <div class="col-md-6" style={{marginTop: 40}}>
              <p className="text-smile">Smile more</p>
              <p className="text-feel">Feel better™</p>

              <div className="col-md-12">
                <p className="text-para">
                  Improve Your Happiness and Health with That Smile App™
                </p>
              </div>

              <div className="col-md-12 px-lg-4 px-2">
                <p className="text-try">Try That Smile App™ for Free</p>
              </div>

              <div className="d-flex justify-content-center gap-xl-5 gap-lg-4 gap-md-3 gap-3">
                <img src={appStore} alt="My Image" className="img-fluid" />
                <img src={playStore} alt="My Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div style={backgroundStyle} className='background-image'>
          <div className="container-box">
            <div className="section-two">
              <p className="middle-header">
                Science-based Benefits of Smiling More Test
              </p>
              <div className="row column-header ">
                <div className="col-md-4 pe-sm-0">
                  <p className="columText">Feel Happier</p>
                  <p className="columText">Reduce Stress</p>
                  <p className="columText">Calm Anxiety</p>
                  <p className="columText">Feel More Confident</p>
                  <p className="columText">Improve Relationships</p>
                </div>
                <div className="col-md-8 p-md-0">
                  <p className="columText">Feel Healthier</p>
                  <p className="columText">Strengthen Your Immune System</p>
                  <p className="columText">Boost Energy</p>
                  <p className="columText">Reduce Pain</p>
                  <p className="columText">Lower Blood Pressure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-three">
          <div className="container-box">
            <p className="text-more">Smile More. Feel Better™.</p>
          </div>
        </div>

        <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
          {carouselData.map(item => (
            <Carousel.Item key={item.id}>
              <div className="container-box">
                <div className="mt-md-5 mt-3 pt-3">
                  <p className="text-power">{item.heading}</p>
                  <p className="sub-power">{item.subHeading}</p>
                </div>
              </div>
              <img
                src={item.imgSrc}
                alt="My Image"
                style={{maxWidth: '100%', height: 'auto'}}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Footer />
      </div>
    </>
  );
}

export default Home;
