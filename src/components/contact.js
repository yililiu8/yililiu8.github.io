import React from 'react';
import './contact.css';

import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import FaceBook from "../assets/facebook.png";

export class Contact extends React.Component {
    render (){
        return (
            <div className="background">
                <h1 className="title">Contact</h1>
                <p className="body">Feel free to contact me. I would love to connection with you!</p>
                <td className="body"onClick={()=> window.open("mailto:akoliu@gmail.com")}><p className="email-link">akoliu8@gmail.com »</p></td>
                <p className="body">Once again, I can be reached through my email, Linkedin, or Facebook. Also feel free to check out my code on GitHub!</p>
                <div className="images">
                    <td onClick={()=> window.open("https://github.com/yililiu8")}><img className="icon" src={GitHub} alt="https://github.com/yililiu8" /></td>
                    <td onClick={()=> window.open("https://www.linkedin.com/in/yililiu/")}><img className="icon-next" src={LinkedIn} alt="https://www.linkedin.com/in/yililiu/" /></td>
                    <td onClick={()=> window.open("https://www.facebook.com/profile.php?id=100004625357742")}><img className="icon-next" src={FaceBook} alt="https://www.facebook.com/profile.php?id=100004625357742" /></td>
                </div>
            </div>
        );
    }
}

