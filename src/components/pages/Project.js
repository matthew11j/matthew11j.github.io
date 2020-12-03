import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import MT_HS from './../../static/images/multitool_homescreen.JPG';
import Nas from './../../static/images/nas.jpg';
import '../../App.css';

export default function Project() {
    const [expanded, setExpanded] = React.useState(true);
    const [expanded2, setExpanded2] = React.useState(true);
    const [expanded3, setExpanded3] = React.useState(true);
    const [expanded4, setExpanded4] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };

    return (
        <div className='project'>
            <div className='body-card card'>
                <span className='card-title'>
                <div className='card-title-3'>Multitool</div>
                    <IconButton
                    className='collapse-chevron'
                    onClick={handleExpandClick3}
                    aria-expanded={expanded3}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </span>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        Multitool is a modular web application intended to practice/improve different aspects of coding by creating tools to use. I wanted a tool that would allow me to keep projects I was working
                        on in a centralized location for easy access/use.<br /><br />
                        
                        <b>Technologies</b>: Python Flask, PostgreSQL, JS/HTML/CSS <br />
                        <b>Learned Skills</b>: User profile implementation, user authentication, modularity
                        <br />
                        <img src={MT_HS} className="img-class-mt-hs" alt="logo" />
                    </Typography>
                    <b>Tools</b> (<i>Modules</i>):<br />
                    <CardContent style={{paddingTop: "10px"}}>
                        <span className="tool-title">Golf Tracker</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a tool I use to track my golf scores after playing rounds. By persisting both course and round information, I am able to inspect course averages and per-hole averages using filters and graphs.
                        </Typography>
                    </CardContent>
                    <CardContent style={{paddingTop: "0"}}>
                        <span className="tool-title">Spotipy</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a tool that uses service calls to Spotify's open source API to retrieve information about my music and listening habits.
                        </Typography>
                    </CardContent>
                    <CardContent style={{paddingTop: "0"}}>
                        <span className="tool-title">Weather</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a tool that displays persisted weather data from python script that is ran daily to automatically update and track weather trends in Cincinnati Ohio.
                        </Typography>
                    </CardContent>
                    <CardContent style={{paddingTop: "0"}}>
                        <span className="tool-title">Recommendations</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a tool that uses service calls to Spotify's open source API to automatically generate playlists based on user inputs and my listening preferences.
                        </Typography>
                    </CardContent>
                    <CardContent style={{paddingTop: "0"}}>
                        <span className="tool-title">MP3 Converter</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a tool that uses ffmpeg to convert Youtube.com song urls to mp3 files and download the generated file to my computer.
                        </Typography>
                    </CardContent>
                    <CardContent style={{paddingTop: "0"}}>
                        <span className="tool-title">Nutrimeal</span>
                        <Typography style={{paddingLeft:"10px"}}>
                            This is a school project for my User Interface class where I was tasked to design and create an application using UI/UX aspects learned from class.
                        </Typography>
                    </CardContent>      
                    <hr /> 
                    <a className="project-link" href="https://github.com/matthew11j/multitool" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />&nbsp;
                        <span>Github Link</span>
                    </a>             
                    </CardContent>
                </Collapse>
            </div>

            <div className='body-card card'>
                <span className='card-title'>
                    <div className='card-title-3'>Homelab NAS</div>
                    <IconButton
                    className='collapse-chevron'
                    onClick={handleExpandClick4}
                    aria-expanded={expanded4}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </span>
                <Collapse in={expanded4} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        This project was created so I could access files from multiple devices on my network as well as giving me an opportunity learn aspects of network attached storage (NAS), SSH, SMB/CIFS, and network security.<br />
                        <img src={Nas} className="img-class-mt-nas" alt="logo" />
                    </Typography>
                    </CardContent>
                </Collapse>
            </div>

            <div className='body-card card'>
                <span className='card-title'>
                    <div className='card-title-3'>Weekly Playlist Generator</div>
                    <IconButton
                    className='collapse-chevron'
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </span>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        This project uses Spotipy, a python library for using Spotify's open source API to generate Spotify playlists automatically. This script creates a playlist of songs released within the past 14 days from a list of artists its given.
                    </Typography>
                    <hr />
                    <a className="project-link" href="https://github.com/matthew11j/spotipy-weekly-track-playlist" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />&nbsp;
                        <span>Github Link</span>
                    </a>
                    </CardContent>
                </Collapse>
            </div>

            <div className='body-card card'>
                <span className='card-title'>
                    <div className='card-title-3'>My e-portfolio</div>
                    <IconButton
                    className='collapse-chevron'
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </span>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph> 
                        This project helped to further develop my front-end web development skills by using NodeJS and React.
                    </Typography>
                    <hr />
                    <a className="project-link" href="https://github.com/matthew11j/eportfolio" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />&nbsp;
                        <span>Github Link</span>
                    </a>
                    </CardContent>
                </Collapse>
            </div>
        </div>
    )
}

