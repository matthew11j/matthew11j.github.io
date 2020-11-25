import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import '../../App.css';

class Sas extends Component {
    render() {
        return (
            <div className='sas'>
                <div className='body-card card'>
                    <div className='card-title-2'>Skills</div>
                    <CardContent>
                        <Typography paragraph>
                            <ul style={{"margin-top": 0}}>
                                <li>Full Stack Development</li>
                                <li>Microservices</li>
                                <li>Database Management</li>
                                <li>Web Application Security</li>
                                <li>User interface design</li>
                                <li>Creating Mockups/Blueprints</li>
                                <li>Git Bash</li>
                                <li>Agile SAFe</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </div>
                <div className='body-card card'>
                    <div className='card-title-2'>Strengths</div>
                    <CardContent>
                        <Typography paragraph>
                        <ul style={{"margin-top": 0}}>
                            <li>Leadership</li>
                            <li>Time Management</li>
                            <li>Team Work</li>
                            <li>Professional Communication</li>
                            <li>Problem Solving</li>
                            <li>Work Ethic</li>
                        </ul>
                        </Typography>
                    </CardContent>
                </div>
            </div>
        )
    }
}
export default Sas;