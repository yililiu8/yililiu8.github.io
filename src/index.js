import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Home } from './components/home.js'
import { Projects } from './components/projects.js'
import { Contact } from './components/contact.js'
import { Experience } from './components/experience.js'

import ProfilePic from "./assets/profile.jpeg";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: "Home"
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
    
    redirectTo(sect) {
        this.setState({
            section: sect
        })
    }
    
    displaySection() {
        if(this.state.section === "Home") {
            return (<Home/>); 
        }
        else if(this.state.section === "Projects") {
            return <Projects />
        }
        else if(this.state.section === "Experience") {
            return <Experience />
        }
        else if(this.state.section === "Contact") {
            return <Contact />
        }
        else {
            return <h1>{this.state.section}</h1>
        }
    }
    
    render (){
        AOS.refresh()
        return (
            <div className="container">
                <div className="contents" data-aos='fade-right'>
                    <img className="profile-pic" src={ProfilePic} alt="https://www.facebook.com/profile.php?id=100004625357742" />
                    <br />
                    <button className="name-header" onClick={() => this.redirectTo("Home")}><span><h1 className="name-header">Yili Liu</h1></span></button>
                    <br />
                    <button className="tab-btns" onClick={() => this.redirectTo("Home")}><span>Home</span></button>
                    <br />
                    <button className="tab-btns" onClick={() => this.redirectTo("Experience")}><span>Experience</span></button>
                    <br />
                    <button className="tab-btns" onClick={() => this.redirectTo("Projects")}><span>Personal Projects</span></button>
                    <br />
                    <button className="tab-btns" onClick={() => this.redirectTo("Contact")}><span>Contact</span></button>
                </div>
                <div className="display">
                    {this.displaySection()}
                    <div className="footer" >
                        <h1 className="copyright">Copyright © 2021 Yili Liu. All Rights Reserved.</h1>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
