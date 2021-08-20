import React from 'react'
import ContactForm from '../components/ContactForm'
import '../App.css'

const Home = (props) => {

  const renderCarouselImage = () => {
    
  };

  return (
    <div className='home-page-content'>
      <div className='carousel-container'>
        <img className='handshake-image' src='/img/shaking-hands-3091906_1280.jpg' alt='handshake'/>
        <div className='info-bubble flex-center info-bubble-top'>
          Business Solutions
        </div>
        <div className='info-bubble info-bubble-bottom' >
          <span style={{ fontSize: '1.8em', lineHeight: '1.2em'}}>
            From startup ventures to Fortune 500 companies
          </span>
          <br /><br />
          <span style={{fontSize: '1.3em', lineHeight: '1.1em', color: '#022B3A'}}>
          Combinining substantive legal experience with an instinctive understanding of our clients' business objectives. 
          </span>
        </div>
      </div>

      <div className='under-main-image'>
        <span>Proudly serving clients <span style={{ color: '#BFDBF7', fontWeight: 'bold' }}><br />across Southern California</span></span> 
      </div>

      <div className='main-content-grid'>
        <div className='content-grid-panel'>
          <div className='content-panel-title'>Client first</div>
            <br />
            <p>We combine substantive legal experience with an instinctive understanding of our clients' business objectives.</p>
            <p>Over the years I have forged strong, close relationships with companies in a broad range of industries and remain committed to providing dynamic representation and a high level of personal service to every client.</p>
        </div>
        <div className='content-grid-panel'>
          <div className='content-panel-title'>All Legal Areas</div>
            <br />
            <p>Whether not yet started or well established, we can handle all your business legal needs.</p>
            <ul>
              <li>Commercial Landlord Representation</li>
              <li>Lease and Contract Preparation</li>
              <li>Title Insurance Claims</li>
              <li>And Much More</li>
            </ul>
        </div>
        <div className='content-grid-panel'>
          <div className='content-panel-title'>Contact Us</div>
            <ContactForm />
        </div>
      </div>

    </div>
  )
};

export default Home;