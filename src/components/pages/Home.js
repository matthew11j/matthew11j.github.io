import React, { Component } from 'react';
import logo from './../../logo.svg';

class Home extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        web app.
                    </p>
                    <p>
                        Work in Progress.
                    </p>
                </header>
            </div>
        )
    }
}

export default Home;