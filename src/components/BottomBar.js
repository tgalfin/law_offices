import React from 'react'
import '../App.css'

const BottomBar = (props) => {

  return (
    <div className='main-content-grid bottom-bar' style={{ display: 'flex', backgroundColor: '#5B7AB2',   }}>
      <div className='content-grid-panel' style={{ color: 'white' }}>
        <h1 className='content-panel-title'>Irvine Office</h1>
        <p>157 Technology Dr<br />Irvine, CA 92629<br/>{process.env.REACT_APP_FORMATTED_PHONE}</p>
      </div>
      <div className='content-grid-panel' style={{ color: 'white' }}>
      <iframe
        title='location'
        height='200'
        width='80%'
        style={{border: 0}}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.223336734441!2d-117.74745046418971!3d33.664006656972205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd5051a15d5b%3A0x60063be56ef12b99!2s157%20Technology%20Dr%2C%20Irvine%2C%20CA%2092618!5e1!3m2!1sen!2sus!4v1629495492294!5m2!1sen!2sus`}>
      </iframe>
      </div>
      <div className='content-grid-panel' style={{ color: 'white' }}>
        <h1 className='content-panel-title'>Navigate</h1>
        <ul className='bottom-nav'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Location</li>
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;