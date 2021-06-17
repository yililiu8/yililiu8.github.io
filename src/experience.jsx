import React from 'react';
import styled from "styled-components";
import Expand from 'react-expand-animated';

const ExpandExperiences = styled("btn")`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer; 
    color: #7285A5; 
    float:right; 
    transition: all 0.5s;
    &:hover {
        margin-top: 5px; 
    }
`;

const ExperienceName = styled("h1")`
    font-size: 18px;
    font-weight: 900;
    color: #716d93;
    background-color: #f2f2f2;
`;

const ExperiencePosition = styled("span")`
    font-size: 16px;
    margin-top: -5px; 
    color: #6D7993; 
    font-weight: 500; 
`;

const ExperienceBody = styled("p")`
    padding-right: 60px;
    padding-bottom: 5px;
    padding-left: 20px; 
    font-size: 16px;
    font-size-adjust: 0.58;
    line-height: 1.3;
    margin: 0 auto;
    color: #9099A2;
`;

const ExperienceDates = styled("p")`
    margin-top: -12px;
    font-style: italic;
    background-color: #fbfbfb;
`;

const LeadershipDates = styled("span")`
    float:right; 
    font-style: italic; 
    margin-right: 50px; 
    font-weight: 400; 
    font-size: 16px; 
`;

const LeadershipName = styled("h1")`
    font-size: 18px;
    font-weight: 900;
    color: #716d93;
`;

export class Experience extends React.Component {
    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    };

    renderExperience(name, position, dates, bullets) {
        const num_bullets = bullets.length
        return (
            <div>
                <ExperienceName>{name} <ExperiencePosition>-- {position}</ExperiencePosition></ExperienceName>
                    <ExperienceDates>{dates}</ExperienceDates>
                    <Expand open={this.state.open}
                            duration={500}
                            easing='ease-out'>
                        {[...Array(num_bullets)].map((x, k) =>
                        <ExperienceBody>• {bullets[k]}</ExperienceBody>)}
                    </Expand>
            </div>
        );
    }

    render (){
        var btnText = "Expand For Details ▼"
        if (this.state.open) {
            btnText = "Collapse ▲ "
        }
        return (
            <div className="section-body">
                <p className="section-header"><u>Experience</u> <ExpandExperiences onClick={this.toggle}>{btnText}</ExpandExperiences></p>
                <div>
                {this.renderExperience("Oracle", "Software Engineer Intern", "June 2021 - Present", ["Oracle Cloud Infrastructure Data Horizon Team"])}
                    {this.renderExperience("Nova, Tech For Good", "Software Developer", "April 2021 - Present", ["Collaborating with a non-profit to develop an iOS app that allows victims of assault to anonymously connect and chat"])}
                    {this.renderExperience("DevX, UCLA", "iOS Developer", "October 2020 - Present", 
                    ["Spearheaded the development for Sparke, an iOS application where users can lend and rent private parking spaces", 
                    "Implemented all app logic and views for the map, booking process, and past transactions using Swift and UIKit", 
                    "Reduced response and load rate by 75% by integrating GeoFire to query parking spots based on geographical location", 
                    "Maintained user and parking spot data with Firebase and Firestore"])}
                </div>
            </div>
        );
    }
}


export class Involvement extends React.Component {
    renderLeadership(name, position, dates) {
        return (
            <div>
                <LeadershipName>{name} <ExperiencePosition>-- {position}</ExperiencePosition><LeadershipDates>{dates}</LeadershipDates></LeadershipName>
            </div>
        );
    }

    render (){
        return (
            <div className="section-body">
                <p className="section-header"><u>Leadership</u></p>
                <div>
                    {this.renderLeadership("UPE", "Alumni Char", "June 2021 - Present")}
                    {this.renderLeadership("DevX", "Tech Advisor/Board Member", "May 2021 - Present")}
                </div>
            </div>
        );
    }
}