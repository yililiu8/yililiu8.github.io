import React from 'react';
import styled from "styled-components";

const Body = styled("p")`
    color: #6D7993; 
    font-family: 'Roboto Slab';
`;

const BlueBody = styled("span")`
    color: #59788E;
    font-weight: 600;
    font-family: 'Roboto Slab';
`;

const AboutSection = styled("div")`
    margin-top: 40px;
    padding-bottom: 20px;
    padding-left: 40px; 
    padding-right: 40px;  
    background-color: white;  
    color: var(--lavendar); 
    font-family: 'Roboto Slab';
    max-width: 1000px;
    margin-left: 10%;
    margin-right: 10%;  
`;
//I'm Steve, a third-year undergraduate student pursuing a B.S. in Computer Science at the University of California - Los Angeles. 

export class About extends React.Component {
    render (){
        return (
            <AboutSection>
                <p className="section-header"><u>About Me</u></p>
                <Body>I'm Yili, a rising <BlueBody> third-year </BlueBody>  undergraduate student pursuing a B.S. in
                    <BlueBody> computer science </BlueBody> 
                    at the
                    <BlueBody> University of California, Los Angeles (UCLA) </BlueBody>.
                    I am passionate about developing applications that can make an impact, and strive to improve the quality of life through technology. 
                </Body>
                <Body>
                    For more information about my experience, please visit my 
                    <BlueBody> Linkedin </BlueBody>. Also feel free to explore my 
                    <BlueBody> GitHub </BlueBody> as well to see some of my code!
                </Body>
            </AboutSection>
        );
    }
}