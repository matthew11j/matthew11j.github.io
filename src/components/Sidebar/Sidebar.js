import React from 'react';
import pdf from './../../static/files/matthewJacksonResume.pdf';
import Image1 from './../../static/images/headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <img src={Image1} className="img-class-2" alt="logo"/>
                <h2>Matthew Jackson</h2>
                <hr />
                <div className="social-media">
                    <div className="social-media-li">
                        <a href="https://github.com/matthew11j" target="_blank" rel="noopener noreferrer">
                            <span className='social-media-img'><FontAwesomeIcon icon={faGithub} /></span>
                            <span className='social-media-text'>Github</span>
                        </a></div>
                    <div className="social-media-li">
                        <a href="https://www.linkedin.com/in/matthew-jackson-2459a4138" target="_blank" rel="noopener noreferrer">
                            <span className='social-media-img'><FontAwesomeIcon icon={faLinkedin} /></span>
                            <span className='social-media-text'>LinkedIn</span>
                        </a>
                    </div>
                    <div className="social-media-li">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <span className='social-media-img'><FontAwesomeIcon icon={faFilePdf} /></span>
                            <span className='social-media-text'>Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}