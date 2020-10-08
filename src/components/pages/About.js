import React, { Component } from 'react';
import logo from './../../static/images/doge.JPG';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-container">
                    <div className="content">
                        <h1>Hello!</h1>
                    </div>
                </div>
                <div className="image-container">
                    <img src={logo} className="img-class" alt="logo" />
                </div>
            </div >
        )
    }
}
export default About;