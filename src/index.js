import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';

import Typist from 'react-typist';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { About } from './about.jsx';
import { Experience } from './experience.jsx';
import { Involvement } from './experience.jsx';
import { Projects } from './projects.jsx';

import GitHub from "./assets/github.png";
import LinkedIn from "./assets/linkedin.png";
import Email from "./assets/email.png";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typing: true,
        };
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }
    
    componentDidMount(){
        document.title = "Yili Liu"
        AOS.init({
            duration : 1000
        })
    }
    
    done = () => {
        this.setState({ typing: false }, () => {
          this.setState({ typing: true })
        });
    }
    
    render (){
        return (
            <div className="container">
                <div className="header">
                    <p className="name-header">Yili Liu</p>
                    {this.state.typing
                    ? <Typist onTypingDone={this.done} 
                            cursor={{blink:true}}
                            className="blinker">
                        <span className="typer">  UCLA Bruin </span>
                        <Typist.Backspace count={13} delay={2000} />
                        <span className="typer">Creator </span>
                        <Typist.Backspace count={8} delay={2000} />
                        <span className="typer">Software Engineer </span>
                        <Typist.Backspace count={18} delay={2000} />
                        <span className="typer">Learner </span>
                        <Typist.Backspace count={8} delay={2000} />
                    </Typist>
                    : ''
                    }
                </div>
                <div className="links" data-aos='fade-up'>
                <div className="images" >
                    <td onClick={()=> window.open("https://github.com/yililiu8")} data-aos='zoom-in'><img className="icon" src={GitHub} alt="https://github.com/yililiu8" /></td>
                    <td onClick={()=> window.open("https://www.linkedin.com/in/yililiu/")} data-aos='zoom-in'><img className="icon-next" src={LinkedIn} alt="https://www.linkedin.com/in/yililiu/" /></td>
                    <td onClick={()=> window.open("mailto:akoliu@gmail.com")} data-aos='zoom-in'><img className="icon-next" src={Email} alt="mailto:akoliu@gmail.com" /></td>
                </div>
                </div>
                <div data-aos='fade-up'>{<About/>}</div>
                <div data-aos='fade-up'>{<Experience/>}</div>
                <div data-aos='fade-up'>{<Involvement/>}</div>
                <div data-aos='fade-up'>{<Projects/>}</div>
                <div className="footer">
                  <p className="copyright">© 2021 Yili Liu</p>
                </div>
            </div>
            
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);