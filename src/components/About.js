import React from 'react'
import { DistortionText } from 'react-text-fun'
import Menu from './Menu'

import './styles/About.css';

export default function About() {

    return (
        <div>
            <Menu />
            <div className="about">
                
                <DistortionText text="pouyan" speed={.1} fontSize={70}/>

                <div className="about-box">
                    <div className="box1">
                        <h2>background</h2>
                        <div className="text1">Architectural designer turned software engineer with a passion for technology, innovation and design. I have always been facinated with colors, patterns and creativity.</div>
                    </div>
                    <div className="box2">
                        <h2>interests</h2>
                        <div className="text2">As a hobbyist, I design 2D visual experiences to trasnfer ideas and concepts. My creative approach and lateral thinking can result in simple yet innovative design solutions. I'm excited to launch these transferrable skills into my software engineering career.</div>
                    </div>
                    <div>
                        <h2>stacks</h2>
                        <div className="text5">Javascript</div>
                        <div className="text6">React</div>
                        <div className="text5">Node.js</div>
                        <div className="text6">Express</div>
                        <div className="text5">Ruby</div>
                        <div className="text6">Sinatra</div>
                        <div className="text5">HTML</div>
                        <div className="text6">CSS</div>
                        <div className="text5">OOP</div>
                        <div className="text6">SQL</div>
                    </div>
                    <div className="box3">
                        <h2>vision</h2>
                        <div className="text3">Programming provides the opportunity to be more creative and productive. With imaginative vision and problem solving skills, I create diverse and flexible design layouts with response to the brief.</div>
                    </div>
                    <div className="box4">
                        <h2>programmer</h2>                    
                        <div className="text4">I seek exposure to creative code as a programmer. I want to create functional and visually satisfying applications and websites. Growth, challenge and responsibility are the main values to be a better professional.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}