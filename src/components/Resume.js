import React from 'react';
import { DistortionText } from 'react-text-fun';
import Menu from './Menu';

import './styles/Resume.css';

export default function About() {
	return (
		<div className='container'>
			<Menu />
			<div className='about'>
				<DistortionText
					text='pouyan'
					speed={0.05}
					fontSize={70}
					fill={'white'}
					fontFamily={('Josefin Sans', 'sans-serif')}
				/>

				<div className='about-box'>
					<div className='box1'>
						<h2>Background</h2>
						<div className='text1'>
							Architectural designer turned software developer with a passion for technology, innovation
							and design. I have always been facinated with colors, patterns and creativity.
						</div>
					</div>
					<div className='box2'>
						<h2>Interests</h2>
						<div className='text2'>
							I design visual experiences to trasnfer concepts and ideas. I seek a creative approach to
							solve a problem that can result in simple yet innovative design solution.
						</div>
					</div>
					<div className='box5'>
						<h2>Stack</h2>
						<div className='text5'>JavaScript</div>
						<div className='text6'>React JS</div>
						<div className='text5'>Node.js</div>
						<div className='text6'>Express</div>
						<div className='text5'>Ruby</div>
						<div className='text6'>Sinatra</div>
						<div className='text5'>HTML | CSS</div>
						<div className='text6'>SCSS | SASS</div>
						<div className='text5'>GIT</div>
						<div className='text6'>SQL</div>
					</div>
					<div className='box3'>
						<h2>Vision</h2>
						<div className='text3'>
							Programming provides an opportunity to be more creative and productive. It provides an
							imaginative mind with diverse possibilities to create varied and innovative applications.
						</div>
					</div>
					<div className='box4'>
						<h2>Programming</h2>
						<div className='text4'>
							Coding is a tool to transfer ideas into a reality to solve big problems and make a
							difference. I seek exposure to creative code as a programmer. I am passionate about clear
							and well structured code.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
