import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, IconButton } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from '../../../utilities/ScrollService';
const Profile = () => {
  return (
    
    <div className='profile-container'>

<div className='profile-parent'>
    <div className='profile-details'> 
    <div className='colz'>
        <div className='colz-icon'>

        <a href='https://www.facebook.com/'>
          <IconButton>
              <Facebook className='svg-icons' />
          </IconButton>
        </a>
        <a href='https://www.github.com/Saqlain16'>
        <IconButton>
          <GitHubIcon className='svg-icons'/>
          </IconButton>
        </a>
        <a href='https://www.linkedin.com/saqlain-khan'>
        <IconButton>
          <LinkedInIcon className='svg-icons' />
          </IconButton>
        </a>
        <a href='https://twitter.com/_itz_saqlain_'>
        <IconButton>
              <TwitterIcon className='svg-icons' />
          </IconButton>
        </a>

        </div>
    </div>
    <div className='profile-details-name'>
          <span className='name-text'>{""} Hello, I'm
          <span className='highlitghted-text neonText'> Saqlain</span>
          </span>
      </div>
      <div className='profile-details-role'>
          <span className='primary-text'>
              {""}
              <h1>
                <Typical 
                loop={Infinity}
                steps={[
                    'Creative Dev💡',
                    1000,
                    'Front End Web Developer💻',
                    1000,
                    'React.JS dev🧱',
                    1000,
                ]}
                wrapper="p"
                />
              </h1>
              <span className='profile-role-tagline'>
                  Knack of creating a stylish ui web app with frontend operations.
              </span>
          </span>
      </div>
      <div className='profile-options'>
      
      <Button variant="contained" className="btn hire-me"
      onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>{""} Hire Me</Button>
            <a href='resume.pdf' class="btn-flip" data-back="Back" data-front="Front" download='Resume resume.pdf'>

       <Button variant="outlined" className='btn get-resume'></Button>
       </a>
      </div>
    </div>
    <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
    </div>
    
     
</div>

    
    </div>

  )
}

export default Profile
