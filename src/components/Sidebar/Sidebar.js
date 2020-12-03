import React from 'react';
import pdf from './../../static/files/Jackson_Resume_Final.pdf';
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
                            <div className='social-media-img'><FontAwesomeIcon icon={faGithub} /></div>
                            <div className='social-media-text'>Github</div>
                        </a></div>
                    <div className="social-media-li">
                        <a href="https://www.linkedin.com/in/matthew-jackson-2459a4138" target="_blank" rel="noopener noreferrer">
                            <div className='social-media-img'><FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className='social-media-text'>LinkedIn</div>
                        </a>
                    </div>
                    <div className="social-media-li">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <div className='social-media-img'><FontAwesomeIcon icon={faFilePdf} /></div>
                            <div className='social-media-text'>Resume</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}