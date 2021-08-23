import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
import BottomBar from '../components/BottomBar'
import '../App.css'

const Home = (props) => {

  const [carouselImageNumber, setCarouselImageNumber] = useState(0);
  const renderCarouselImage = () => {
    return (
      <div>
        <div style={{ display: carouselImageNumber === 0 ? 'block' : 'none' }}>
          <img className='handshake-image carousel-image' src='/img/shaking-hands-3091906_1280.jpg' alt='handshake'/>
          <div id='main-bubble-0-top' className='info-bubble flex-center info-bubble-top'>
            Business Solutions
          </div>
          <div id='main-bubble-0-bottom' className='info-bubble info-bubble-bottom' >
            <span style={{ fontSize: '1.8em', lineHeight: '1.2em'}}>
              From Startup Ventures to Fortune 500 Companies
            </span>
            <br /><br />
            <span style={{fontSize: '1.3em', lineHeight: '1.1em', color: '#022B3A'}}>
              Combinining substantive legal experience with an instinctive understanding of our clients' business objectives. 
            </span>
          </div>
        </div>
        
        <div style={{display: carouselImageNumber === 1 ? 'block' : 'none' }}>
          <img className='carousel-image' src='/img/pueblo-1680297_1280-cropped.jpg' alt='handshake'/>
          <div id='main-bubble-1-top' className='info-bubble flex-center info-bubble-top'>
            Trusted Experts
          </div>
          <div id='main-bubble-1-bottom' className='info-bubble info-bubble-bottom' >
            <span style={{ fontSize: '1.8em', lineHeight: '1.2em'}}>
              An Impeccable Reputation
            </span>
            <br /><br />
            <span style={{fontSize: '1.3em', lineHeight: '1.1em', color: 'white'}}>
              Rated AV* by Martindale-Hubbell's peer review system, and listed in the Bar Register of Preeminent Lawyers published by Martindale-Hubbell.
            </span>
          </div>
        </div>
        

      </div>
    )
  };
  
  const handleCarouselClick = () => {
    if (carouselImageNumber === 1) {
      setCarouselImageNumber(0);
    } else {
      setCarouselImageNumber(1);
    }
  };

  return (
    <div className='home-page-content main-content'>
      <div className='carousel-container' onClick={handleCarouselClick}>
          {renderCarouselImage()}
        <div style={{ display: 'flex', position: 'absolute', top: '90%', left: '50%', }}>
          <div style={{ margin: '0px 10px', height: '1.5em', width: '1.5em', backgroundColor: carouselImageNumber === 0 ? 'white' : 'Transparent', border: '2px solid darkgrey', borderRadius: '50%',  }} />
          <div style={{ margin: '0px 10px', height: '1.5em', width: '1.5em', backgroundColor: carouselImageNumber === 1 ? 'white' : 'Transparent', border: '2px solid darkgrey', borderRadius: '50%',  }} />
        </div>
      </div>
      <div className='under-main-image'>
        <span>Proudly serving clients <span style={{ color: '#BFDBF7', fontWeight: 'bold' }}><br />across Southern California</span></span> 
      </div>

      <div className='main-content-grid' >
        <div className='content-grid-panel'>
          <h1 className='content-panel-title'>Client first</h1>
            <br />
            <p>We combine substantive legal experience with an instinctive understanding of our clients' business objectives.</p>
            <img style={{ maxWidth: '90%', padding: '0px 10px 10px 10px' }} src='/img/group-shaking-hands-scaled-2.jpg' alt='group shaking hands' />
            <p>Over the years I have forged strong, close relationships with companies in a broad range of industries and remain committed to providing dynamic representation and a high level of personal service to every client.</p>
        </div>
        
        <div className='content-grid-panel'>
          <h1 className='content-panel-title'>All Legal Areas</h1>
            <br />
            <p>Whether not yet started or well established, we can handle all your business legal needs.</p>
            <ul className='bullet-list'>
              <li>Commercial Landlord Representation</li>
              <li>Lease and Contract Preparation</li>
              <li>Title Insurance Claims</li>
              <li>And Much More</li>
            </ul>
            <img style={{ maxWidth: '90%', }} src='/img/legal-5293009_640.jpg' alt='justice scales' />
        </div>
        <div className='content-grid-panel'>
          <h1 className='content-panel-title'>Contact Us</h1>
          <ContactForm />
        </div>
      </div>
      <BottomBar />
    </div>
  )
};

export default Home;