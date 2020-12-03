import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import '../../App.css';

export default function Experience() {
    
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='experience'>
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
                        <b>Position</b>: Full Stack Software Developer Co-op 
                    </Typography>
                    <Typography paragraph>
                        <b>Job Description</b>: At Siemens PLM I develop a tool that is used by teams to help provide specialized software solutions to customers. Within this application, users are able to track
                        feature development, customer deployments, and the status of software releases to customers. My team strives to develop better ways to model business processes for customers to visualize their businesses built on top of BPMN modeling
                        or Business Process Model and Notation. By creating functionality to help streamline and automate the users business process modeling, this tool can help employee's expedite and provide better solutions
                        to customers.
                    </Typography>
                    <Typography paragraph>
                        <b>Languages Used</b>: JavaScript, HTML/CSS, Java, and SQL.<br />
                        <b>Technologies Used</b>: Angular Web Framework, Apache Web Server, MySQL
                    </Typography>
                    <div className='experience-grid'>
                        <div className='experience-grid-1'>
                            <b>Hard Skills</b>: 
                            <ul>
                                <li>Full Stack Development</li>
                                <li>Microservices</li>
                                <li>Database Management</li>
                                <li>Web Application Security</li>
                                <li>User interface Design</li>
                                <li>Creating Mockups/Prototypes</li>
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
                    <Typography>
                        <b>Semesters Worked</b>: Spring and Fall '18, Summer '19, Spring '20 - Present,
                    </Typography>
                    </CardContent>
                </Collapse>
            </div>
        </div>
    )
}
