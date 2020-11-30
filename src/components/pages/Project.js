import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../App.css';

export default function Project() {
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    return (
        <div className='project'>
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
                        <p>
                            This project helped to further develop my front-end web development skills in the form of a static html site.
                        </p>
                        <a class="project-link" href="https://github.com/matthew11j/eportfolio" target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> &nbsp;
                            <span class="username">Github Link</span>
                        </a>
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
                        <p>
                            This project uses Spotipy, a python library for using Spotify's API to generate Spotify playlists automatically. This script creates a playlist of songs released within the past 14 days from a list of artists given.
                        </p>
                        <a class="project-link" href="https://github.com/matthew11j/spotipy-weekly-track-playlist" target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> &nbsp;
                            <span class="username">Github Link</span>
                        </a>
                    </Typography>
                    </CardContent>
                </Collapse>
            </div>
        </div>
    )
}

