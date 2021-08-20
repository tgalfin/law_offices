import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

const TopBar = (props) => {

  return (
    <div className='top-bar'>
      <span className='top-bar-number'>
        <a href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_FORMATTED_PHONE}</a><a href={`mailto:${process.env.REACT_APP_EMAIL_ADDRESS}`}>
          <Icon link name='mail' />
        </a>
      </span>
        <a href={`${process.env.REACT_APP_LINKEDIN}`} target="_blank" rel="noopener noreferrer">
          <Icon link className='linkedin-icon' size='big' name='linkedin'/>
        </a>
    </div>
  )
};

export default TopBar;