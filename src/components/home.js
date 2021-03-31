import React from 'react';
import './home.css';
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import FaceBook from "../assets/facebook.png";

export class Home extends React.Component {
    render (){
        return (
            <div className="background">
                <h1 className="title">Home</h1>
                <p className="body">I'm Yili Liu.</p>
                <p className="body">I'm a computer student at UCLA striving to improve the quality of life through technology. For more information about my experience, please visit my linkedin. Feel free to explore my GitHub as well to see some of my code!</p>
                <div className="images">
                    <td onClick={()=> window.open("https://github.com/yililiu8")}><img className="icon" src={GitHub} alt="https://github.com/yililiu8" /></td>
                    <td onClick={()=> window.open("https://www.linkedin.com/in/yililiu/")}><img className="icon-next" src={LinkedIn} alt="https://www.linkedin.com/in/yililiu/" /></td>
                    <td onClick={()=> window.open("https://www.facebook.com/profile.php?id=100004625357742")}><img className="icon-next" src={FaceBook} alt="https://www.facebook.com/profile.php?id=100004625357742" /></td>
                </div>
            </div>
        );
    }
}
