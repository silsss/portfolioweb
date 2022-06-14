import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { GitHub } from '@material-ui/icons';
import '../styles/footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GitHub />
        </div>
        <p>&copy; 2022 Silja</p>
    </div>
  )
}

export default Footer;