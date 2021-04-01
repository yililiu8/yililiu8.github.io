import React from 'react';
import './experience.css';

export class Experience extends React.Component {
    render (){
        return (
            <div className="background" data-aos='fade-left'>
                <h1 className="title">Experience</h1>
                <div className="experience">
                    <h1 className="experience-name">DevX, UCLA</h1>
                    <h2 className="experience-position">iOS Developer</h2>
                    <p className="experience-dates">October 2020 - Present</p>
                    <p className="experience-body ">• Spearheaded the development for Sparke, an iOS application where users can lend and rent private parking spaces </p>
                    <p className="experience-body ">
                        • Implemented all app logic and views for the map, booking process, and past transactions using Swift and UIKit
                        </p>
                    <p className="experience-body ">
                        • Reduced response and load rate by 75% by integrating GeoFire to query parking spots based on geographical location
                        </p>
                    <p className="experience-body">
                        • Maintained user and parking spot data with Firebase and Firestore
                        </p>
                </div>
                
            </div>
        );
    }
}

