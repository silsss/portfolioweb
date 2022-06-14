import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/footer.css'



function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href='https://github.com/silsss/' target={"_blank"} rel="noreferrer"><GitHubIcon /></a>
          <a href='https://www.linkedin.com/in/silja-sorinardottir' target={'_blank'} rel="norefferer"><LinkedInIcon /></a>
          <a href="mailto:silja-s@hotmail.com?body=Hi Silja!"><EmailIcon /></a>
        </div>
        <p>&copy; 2022 Silja</p>
    </div>
  )
}

export default Footer;