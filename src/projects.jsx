import React from "react";
import './projects.css';
import styled from "styled-components";

import Weatherify from "./assets/weatherify.png";
import Achieve from "./assets/achieve.png";
import Ookla from "./assets/ookla.png";
import Sparke from "./assets/sparke.png";
import MiniRouge from "./assets/minirouge.png";

class ProjectModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.changeHover = this.changeHover.bind(this)
    }
    changeHover () {
        this.setState({ hover: !this.state.hover })
    }

    render() {
        const num_tags = this.props.tags.length
        return (
            <div className="project-container">
                <div className="project-inner">
                    <div className="project-front"> 
                        <img className="img" src={this.props.image} alt={this.props.link}/> 
                    </div>
                    <div className="project-back">
                        <p className="project-title">{this.props.title}</p>
                        <hr className="custom-hr" />
                        <p className="project-body">{this.props.description}</p>
                        <div className="tags">
                            {[...Array(num_tags)].map((x, k) =>
                                <p className="tag">{this.props.tags[k]}</p>)}
                         </div>
                        <td onClick={()=> window.open(this.props.link)}><p className="project-links">{this.props.linkDesc} »</p></td>
                    </div>
                </div>
            </div>
        )
    }
}
 

export class Projects extends React.Component {
    renderProject(i, title, image, description, link, linkDesc, tags) {
        const num_tags = tags.length
        return (
            <ProjectModel
                title={title}
                image={image}
                description={description}
                link={link}
                linkDesc={linkDesc}
                tags={tags}
            ></ProjectModel>
        );
    }
    
    render (){
        return (
            <div className="section-body">
                <p className="section-header"><u>Projects</u></p>
                <div className="parent">
                    {this.renderProject(0, "Weatherify", Weatherify, "An iOS application that generates custom Spotify playlists and gives music recommendations based on the weather", "https://github.com/yililiu8/Weatherify", "GitHub", ["Swift", "Spotify Web API", "OpenWeatherMap"])}
                
                    {this.renderProject(1, "Sparke", Sparke, "The Airbnb for parking - an iOS application where users can lend and rent private parking spaces", "https://github.com/ucladevx/InstaPark-ios", "GitHub", ["Swift", "Firebase", "BrainTree Payments API"])}
                
                    {this.renderProject(2, "Ookla Manager", Ookla, "A full-stack learning management web app for college students", "https://github.com/emilyvainberg12/CS97-Web-App-", "GitHub", ["JavaScript", "React.js", "Node.js", "MongoDB", "Express"])}
                
                    {this.renderProject(3, "Achieve", Achieve, "An iOS application that allows users to keep track of personal goals and daily habits", "https://apps.apple.com/us/app/id1522535100#?platform=iphone", "View on App Store", ["Swift", "iOS"])}
                
                    {this.renderProject(4, "Mini Rouge", MiniRouge, "A text-based Rouge inspired game where users can fight monsters, pick up artifacts, and traverse through levels", "https://github.com/yililiu8/Mini-Rouge", "Github", ["C++"])}
                </div>
                
            </div>
        );
    }
}