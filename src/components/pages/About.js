import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image1 from './../../static/images/me.png';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import '../../App.css';

class About extends Component {
    render() {
        return (
            <div className='about'>
                {/* <Card /> */}
                <div className='body-card card'>
                    <CardContent>
                    <Typography paragraph>
                        <img src={Image1} className="img-class-1" alt="logo" />
                        Welcome! My name is Matthew Jackson, I am a Computer Engineering major at the University of Cincinnati graduating in the Spring of 2021. I am very passionate about engineering, technology, and I want to help make the world a better place. I am interested in web development, data analytics, and automation. Recently I have gotten into using python and Spotify's API to automatically generate music playlists. Examples of this can be seen on my <Link to='/projects' className='inline-link'><span>projects</span></Link> projects page.
                    </Typography>
                    </CardContent>
                </div>
            </div>
        )
    }
}
export default About;