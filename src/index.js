import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Home } from './components/home.js'
import { Projects } from './components/projects.js'
import { Contact } from './components/contact.js'
import { Experience } from './components/experience.js'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: "Home"
        };
    }
    
    redirectTo(sect) {
        this.setState({
            section: sect
        })
    }
    
    displaySection() {
        if(this.state.section === "Home") {
            return <Home/>
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
        return (
            <div className="container">
                <div className="contents">
                    <h1 className="name-header">Yili Liu</h1>
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
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
