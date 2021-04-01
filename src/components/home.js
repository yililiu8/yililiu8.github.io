import React from 'react';
import './home.css';
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/email.png";

export class Home extends React.Component {
    render (){
        return (
            <div className="background" data-aos='fade-left'>
                <h1 className="title">Home</h1>
                <p className="body">I'm <span className="blue-body">Yili Liu.</span> </p>
                <p className="body">I'm a <span className="blue-body">computer science</span> student at <span className="blue-body">UCLA</span> striving to improve the quality of life through technology. For more information about my experience, please visit my <span className="blue-body">Linkedin</span>. Feel free to explore my <span className="blue-body">GitHub</span> as well to see some of my code!</p>
                <div className="images">
                    <td onClick={()=> window.open("https://github.com/yililiu8")} data-aos='zoom-in'><img className="icon" src={GitHub} alt="https://github.com/yililiu8" /></td>
                    <td onClick={()=> window.open("https://www.linkedin.com/in/yililiu/")} data-aos='zoom-in'><img className="icon-next" src={LinkedIn} alt="https://www.linkedin.com/in/yililiu/" /></td>
                    <td onClick={()=> window.open("mailto:akoliu@gmail.com")} data-aos='zoom-in'><img className="icon-next" src={Email} alt="mailto:akoliu@gmail.com" /></td>
                </div>
            </div>
        );
    }
}
