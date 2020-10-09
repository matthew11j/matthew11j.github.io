import React, { Component } from 'react';
import Image1 from './../../static/images/me.png';
import '../../App.css';

class Sas extends Component {
    render() {
        return (
            <div className='sas'>
                {/* <Card /> */}
                <div className='body-card card'>
                {/* <h1 className='card-title'></h1> */}
                    <p>
                        <img src={Image1} className="img-class-1" alt="logo" />
                        Hello
                    </p>
                </div>
            </div>
        )
    }
}
export default Sas;