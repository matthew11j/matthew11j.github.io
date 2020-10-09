import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import '../../App.css';

export default function Project() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='project'>
            <div className='body-card card'>
                <span className='card-title'>
                    <img alt="File:Siemens-logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/744px-Siemens-logo.svg.png" width="186" height="44" />
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
                        <b>Position</b>: Full Stack Web Developer Coop 
                    </Typography>
                    <Typography paragraph>
                        <b>Job Description</b>: At Siemens PLM I work on an internal Siemens website that helps teams track projects and software releases.
                            My job is to help add and improve two main functionalities of the application. One functionality is to take large amounts of data and 
                            display it to the user in an organized and easy-to-read way. The second functionality I help implement is 
                            to improve the tracking of projects that teams are working on.
                    </Typography>
                    <Typography paragraph>
                        <b>Languages Used</b>: HTML5, JavaScript, CSS3, Java, and SQL.
                    </Typography>
                        <div className='experience-grid'>
                            <div className='experience-grid-1'>
                                <b>Hard Skills</b>: 
                                <ul>
                                    <li>Full Stack Development</li>
                                    <li>Microservices</li>
                                    <li>Database Management</li>
                                    <li>Web Application Security</li>
                                    <li>User interface design</li>
                                    <li>Creating Mockups/Blueprints</li>
                                    <li>Git Bash</li>
                                    <li>Agile SAFe</li>
                                </ul>
                            </div>
                            <div className='experience-grid-2'>
                                <b>Soft Skills</b>:
                                <ul>
                                    <li>Leadership</li>
                                    <li>Time Management</li>
                                    <li>Team Work</li>
                                    <li>Professional Communication</li>
                                    <li>Problem Solving</li>
                                    <li>Work Ethic</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>
            </div>
        </div>
    )
}

