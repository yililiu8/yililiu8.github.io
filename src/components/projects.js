import React from "react";
import './projects.css';

import Weatherify from "../assets/weatherify.png";
import Achieve from "../assets/achieve.png";
import Ookla from "../assets/ookla.png";
import Sparke from "../assets/sparke.png";
import MiniRouge from "../assets/minirouge.png";

export class Projects extends React.Component {
    renderProject(title, image, description, link, linkDesc, tags) {
        const num_tags = tags.length
        return (
            <div className="project-container">
                <div>
                    <img className="img" src={image} alt={link}/>
                </div>
                <p className="project-title">{title}</p>
                <hr className="custom-hr" />
                <p className="project-body">{description}</p>
                <div className="tags">
                    {[...Array(num_tags)].map((x, k) =>
                                              <p className="tag">{tags[k]}</p>)}
                </div>
                <td onClick={()=> window.open(link)}><p className="links">{linkDesc} »</p></td>
            </div>
        );
    }
    
    render (){
        return (
            <div className="background-projects" data-aos='fade-left'>
                <h1 className="title">Projects</h1>
                <div>
                    {this.renderProject("Weatherify", Weatherify, "An iOS application that generates custom Spotify playlists and gives music recommendations based on the weather", "https://github.com/yililiu8/Weatherify", "GitHub", ["Swift", "Spotify Web API", "OpenWeatherMap"])}
                
                    {this.renderProject("Sparke", Sparke, "The Airbnb for parking - an iOS application where users can lend and rent private parking spaces", "https://github.com/ucladevx/InstaPark-ios", "GitHub", ["Swift", "Firebase", "BrainTree Payments API"])}
                
                    {this.renderProject("Ookla Manager", Ookla, "A full-stack learning management web app for college students", "https://github.com/emilyvainberg12/CS97-Web-App-", "GitHub", ["JavaScript", "React.js", "Node.js", "MongoDB", "Express"])}
                
                    {this.renderProject("Achieve", Achieve, "An iOS application that allows users to keep track of personal goals and daily habits", "https://apps.apple.com/us/app/id1522535100#?platform=iphone", "View/Download on the App Store", ["Swift", "iOS"])}
                
                    {this.renderProject("Mini Rouge", MiniRouge, "A text-based Rouge inspired game where users can fight monsters, pick up artifacts, and traverse through levels", "https://github.com/yililiu8/Mini-Rouge", "Github", ["C++"])}
                </div>
            </div>
        );
    }
}
